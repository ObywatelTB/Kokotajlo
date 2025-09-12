"""
Kokotajlo Backend API
FastAPI application for AI agent services targeting French businesses
"""

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
import os
from dotenv import load_dotenv
from typing import Optional, Dict, Any, List
import logging
import uvicorn
from openai import OpenAI
import yaml  # type: ignore
from pathlib import Path
import requests  # type: ignore
from logging_config import logger, console_handler, log_level, configure_uvicorn_logging

# Load environment variables
load_dotenv()

# Constants
OPENAI_MODEL = "gpt-4o-mini"
N8N_URL = os.getenv("N8N_URL", "")


def load_prompts(file_path: str) -> dict:
    """Load prompts from YAML file with error handling."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f)
    except FileNotFoundError:
        logger.error(f"Prompts file not found: {file_path}")
        return {}
    except yaml.YAMLError as e:
        logger.error(f"Error parsing YAML file {file_path}: {str(e)}")
        return {}
    except Exception as e:
        logger.error(
            f"Unexpected error loading prompts from {file_path}: {str(e)}")
        return {}

# Pydantic models


class ChatRequest(BaseModel):
    message: str
    language: Optional[str] = "fr"
    context: Optional[Dict[str, Any]] = None


class ChatResponse(BaseModel):
    response: str
    language: str
    timestamp: str
    conversation_id: Optional[str] = None


class ContactRequest(BaseModel):
    name: str
    email: str
    company: str
    sector: str
    message: str
    gdpr: bool
    source: Optional[str] = "contact_form"
    timestamp: Optional[str] = None


class ContactResponse(BaseModel):
    success: bool
    message: str
    contact_id: Optional[str] = None
    timestamp: str


# Initialize OpenAI client (only if API key is available)
openai_api_key = os.getenv("OPENAI_API_KEY")
if openai_api_key and openai_api_key != "stub":
    openai_client: Optional[OpenAI] = OpenAI(api_key=openai_api_key)
    OPENAI_AVAILABLE = True
else:
    openai_client = None
    OPENAI_AVAILABLE = False
    logger.warning("OpenAI API key not configured - using fallback responses")

# Load prompts from YAML files
# Get the directory of the current file and construct paths to YAML files
current_dir = Path(__file__).parent
prompts_dir = current_dir.parent / "src" / "prompts"
system_prompts_file = prompts_dir / "system.yaml"
fallback_prompts_file = prompts_dir / "fallback.yaml"

SYSTEM_PROMPTS = load_prompts(str(system_prompts_file))
FALLBACK_PROMPTS = load_prompts(str(fallback_prompts_file))


def get_system_prompt(language: str = "fr", context: Optional[Dict[str, Any]] = None) -> str:
    """Get system prompt based on context (language handled within prompt)."""
    try:
        # Default to general context if no context provided
        context_key = "general"
        if context and "page" in context:
            context_key = context["page"]
        else:
            logger.debug(
                f"No context provided or missing page key, using default 'general' context")

        # Get prompt from YAML directly by context key
        prompt = SYSTEM_PROMPTS.get(context_key, {}).get("system_prompt")
        if prompt:
            logger.debug(f"Using system prompt for context: {context_key}")
            return prompt.strip()

        # Try fallback to general context
        if context_key != "general":
            logger.warning(
                f"Context '{context_key}' not found, falling back to 'general'")
            prompt = SYSTEM_PROMPTS.get("general", {}).get("system_prompt")
            if prompt:
                return prompt.strip()

    except Exception as e:
        logger.warning(f"Error retrieving system prompt: {str(e)}")

    # Final fallback when all else fails
    logger.warning("Using final fallback system prompt")
    return "You are a helpful AI assistant for Kokotajlo, a startup building AI solutions for French businesses. Always respond in French by default."


def get_fallback_responses(language: str = "fr", context: Optional[Dict[str, Any]] = None) -> List[str]:
    """Get fallback responses based on language and context."""
    try:
        # Default to general context if no context provided
        context_key = "general"
        if context and "page" in context:
            context_key = context["page"]

        # Get responses from YAML
        responses = FALLBACK_PROMPTS.get(language, {}).get(
            context_key, {}).get("responses", [])
        if responses:
            return responses

        # Try fallback to general context in same language
        if context_key != "general":
            responses = FALLBACK_PROMPTS.get(language, {}).get(
                "general", {}).get("responses", [])
            if responses:
                return responses

        # Try English fallback
        responses = FALLBACK_PROMPTS.get("en", {}).get(
            "general", {}).get("responses", [])
        if responses:
            return responses

    except Exception as e:
        logger.warning(f"Error retrieving fallback responses: {str(e)}")

    # Final fallback when all else fails
    return ["Bonjour! Je suis l'assistant virtuel de Kokotajlo. Comment puis-je vous aider aujourd'hui?"]


def call_n8n_chat_agent(chat_request: ChatRequest) -> tuple[str, bool]:
    """Call the n8n chat agent webhook and return the assistant reply.

    Expects the n8n workflow to return JSON with one of the keys: 'output',
    'response', 'text', or 'message'. Returns a French error message on
    unexpected payloads; raises on network/protocol errors so caller can handle.
    """
    if not N8N_URL:
        logger.warning(
            "N8N_URL not configured; cannot route chat to n8n agent")
        return ("Service indisponible pour le moment. Réessayez plus tard.", False)

    payload: Dict[str, Any] = {
        "message": chat_request.message,
        "language": chat_request.language,
        "context": chat_request.context,
    }

    try:
        response = requests.post(N8N_URL, json=payload, timeout=30)
        response.raise_for_status()
        data: Any = response.json()

        if isinstance(data, dict):
            for key in ("output", "response", "text", "message"):
                value = data.get(key)
                if isinstance(value, str) and value.strip():
                    return (value.strip(), True)

        if isinstance(data, str) and data.strip():
            return (data.strip(), True)

        logger.error("n8n webhook returned unexpected payload structure")
        return ("Désolé, une erreur est survenue avec le service n8n.", False)
    except Exception as e:
        logger.error(f"n8n error: {str(e)}")
        return ("Erreur de traitement, réessayez.", False)


def call_openai_fallback(chat_request: ChatRequest, message: str) -> tuple[str, bool]:
    """Call OpenAI API as fallback when N8N fails.

    Returns the AI response and success flag. Success is False on API errors.
    """
    if not OPENAI_AVAILABLE or not openai_client:
        logger.warning("OpenAI client not available for fallback")
        return ("Service OpenAI indisponible.", False)

    try:
        system_prompt = get_system_prompt(
            chat_request.language or "fr", chat_request.context)
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": message}
        ]
        response = openai_client.chat.completions.create(
            model=OPENAI_MODEL,
            messages=messages,  # type: ignore
            max_tokens=200,
            temperature=0.7,
        )
        ai_response = (response.choices[0].message.content or "").strip()
        if not ai_response:
            ai_response = "Désolé, je n'ai pas pu générer une réponse appropriée. Contactez-nous directement pour en savoir plus sur nos services."

        return (ai_response, True)
    except Exception as e:
        logger.error(f"OpenAI API error: {str(e)}")
        return ("Erreur OpenAI, réessayez.", False)


# Initialize FastAPI app
app = FastAPI(
    title="Kokotajlo API",
    description="Backend API for AI agents platform targeting French businesses",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Rate limiting
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(
    RateLimitExceeded, _rate_limit_exceeded_handler)  # type: ignore
app.add_middleware(SlowAPIMiddleware)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv(
        "CORS_ORIGINS", "http://localhost:4000,https://your-railway-url").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "kokotajlo-backend"}

# API v1 routes


@app.get("/api/v1/status")
async def api_status():
    """API status endpoint"""
    return {
        "status": "operational",
        "version": "1.0.0",
        "features": ["chatbot", "rate_limiting", "cors"],
        "environment": os.getenv("DEBUG", "False").lower() == "true"
    }

# Chatbot proxy endpoint (placeholder for OpenAI integration)


@app.post("/chat")
@limiter.limit("10/minute")
async def chat_endpoint(request: Request, chat_request: ChatRequest):
    """
    Chat endpoint with OpenAI GPT-4o-mini integration
    Rate limited to 10 requests per minute
    Accepts ChatRequest with message (or query fallback), optional language and context
    """
    try:
        from datetime import datetime
        import random

        # Normalize input: Accept 'query' or 'message' from frontend
        message = chat_request.message or getattr(
            chat_request, 'query', 'No message provided')
        # Log for Railway
        logger.info(
            f"Chat request received: {message[:50]}... (lang: {chat_request.language})")

        # Try n8n chat agent first (availability checker)
        n8n_text, n8n_ok = call_n8n_chat_agent(chat_request)
        if n8n_ok:
            return ChatResponse(
                response=n8n_text,
                language=chat_request.language or "fr",
                timestamp=datetime.utcnow().isoformat() + "Z",
                conversation_id=f"conv_n8n_{random.randint(1000, 9999)}"
            )

        # OpenAI fallback
        openai_text, openai_ok = call_openai_fallback(chat_request, message)
        if openai_ok:
            return ChatResponse(
                response=openai_text,
                language=chat_request.language or "fr",
                timestamp=datetime.utcnow().isoformat() + "Z",
                conversation_id=f"conv_openai_{random.randint(1000, 9999)}"
            )

        # Final canned fallback
        fallback_responses = get_fallback_responses(
            chat_request.language or "fr", chat_request.context)
        return ChatResponse(
            response=random.choice(fallback_responses),
            language=chat_request.language or "fr",
            timestamp=datetime.utcnow().isoformat() + "Z",
            conversation_id=f"conv_fallback_{random.randint(1000, 9999)}"
        )
    except Exception as e:
        logger.error(f"Chat endpoint error: {str(e)}")
        raise HTTPException(
            status_code=500, detail="Erreur lors du traitement de la requête chat")

# Contact endpoint with Mailjet stub


@app.post("/contact")
@limiter.limit("5/minute")
async def contact_endpoint(request: Request, contact_request: ContactRequest):
    """
    Contact form endpoint with Mailjet email integration stub
    Rate limited to 5 requests per minute
    Accepts ContactRequest with contact form data
    """
    try:
        import random
        from datetime import datetime

        # Log the contact request
        logger.info(
            f"Contact request from {contact_request.name} ({contact_request.email}) - {contact_request.company}")

        # Generate contact ID
        contact_id = f"contact_{random.randint(10000, 99999)}_{int(datetime.utcnow().timestamp())}"

        # Mailjet stub implementation
        # In production, replace with actual Mailjet API calls
        email_key = os.getenv("MAILJET_API_KEY")
        email_secret = os.getenv("MAILJET_SECRET_KEY")

        if email_key and email_secret and email_key != "stub":
            try:
                # TODO: Implement actual Mailjet integration
                # For now, just log the email that would be sent
                logger.info(
                    f"Would send email to contact@kokotajlo.fr with contact details from {contact_request.email}")

                # Email content for internal notification
                internal_subject = f"Nouveau contact: {contact_request.name} - {contact_request.company}"
                internal_body = f"""
                Nouveau contact depuis le formulaire:

                Nom: {contact_request.name}
                Email: {contact_request.email}
                Entreprise: {contact_request.company}
                Secteur: {contact_request.sector}
                Message: {contact_request.message}
                GDPR accepté: {contact_request.gdpr}
                Source: {contact_request.source}
                """

                # Email content for client confirmation
                client_subject = "Votre demande de contact chez Kokotajlo"
                client_body = f"""
                Bonjour {contact_request.name},

                Merci pour votre intérêt pour nos solutions IA conformes.

                Nous avons bien reçu votre demande concernant:
                - Entreprise: {contact_request.company}
                - Secteur: {contact_request.sector}

                Notre équipe va analyser votre projet et vous contacter sous 24h ouvrées.

                Cordialement,
                L'équipe Kokotajlo
                """

            except Exception as e:
                logger.error(f"Email sending error: {str(e)}")
                # Continue with success response even if email fails

        # Store contact in database (placeholder)
        # TODO: Implement database storage
        logger.info(f"Contact stored with ID: {contact_id}")

        return ContactResponse(
            success=True,
            message="Votre demande a été reçue. Nous vous contacterons sous 24h.",
            contact_id=contact_id,
            timestamp=datetime.utcnow().isoformat() + "Z"
        )

    except Exception as e:
        logger.error(f"Contact endpoint error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Erreur lors du traitement de votre demande de contact"
        )

# Error handlers


@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    """Custom HTTP exception handler"""
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "error": {
                "message": exc.detail,
                "type": "http_exception",
                "status_code": exc.status_code
            }
        }
    )


@app.exception_handler(Exception)
async def general_exception_handler(request: Request, exc: Exception):
    """General exception handler"""
    logger.error(f"Unhandled exception: {str(exc)}")
    return JSONResponse(
        status_code=500,
        content={
            "error": {
                "message": "Erreur interne du serveur",
                "type": "internal_server_error",
                "status_code": 500
            }
        }
    )

# Startup and shutdown events


@app.on_event("startup")
async def startup_event():
    """Application startup event"""
    logger.info("Starting Kokotajlo backend...")
    logger.debug("Starting Kokotajlo backend in debug mode...")
    # TODO: Initialize database connections, AI clients, etc.


@app.on_event("shutdown")
async def shutdown_event():
    """Application shutdown event"""
    logger.info("Shutting down Kokotajlo backend...")
    # TODO: Close database connections, cleanup resources, etc.

if __name__ == "__main__":
    # Dual-stack: IPv4 for public/health, IPv6 for private
    host = os.getenv("HOST", "0.0.0.0")
    # Use $PORT (Railway sets to 8080)
    port = int(os.getenv("PORT", os.getenv("API_PORT", 4001)))
    debug = os.getenv("DEBUG", "False").lower() == "true"
    log_level_str = os.getenv("LOG_LEVEL", "info").lower()

    # Convert log level string to uvicorn format
    if log_level_str == "debug":
        log_level = "debug"
    elif log_level_str == "info":
        log_level = "info"
    elif log_level_str == "warning":
        log_level = "warning"
    elif log_level_str == "error":
        log_level = "error"
    elif log_level_str == "critical":
        log_level = "critical"
    else:
        log_level = "info"  # default

    # Configure uvicorn logging to use our JSON formatter
    uvicorn_config = uvicorn.Config(
        "main:app",
        host=host,
        port=port,
        reload=debug,
        log_level=log_level,
        access_log=True
    )

    # Configure uvicorn to use the same JSON formatter
    configure_uvicorn_logging(console_handler)

    server = uvicorn.Server(uvicorn_config)
    server.run()
