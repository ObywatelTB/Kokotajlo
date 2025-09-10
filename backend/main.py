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

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=getattr(logging, os.getenv("LOG_LEVEL", "INFO")),
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

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

# System prompt for Kokotajlo chatbot
KOKOTAJLO_SYSTEM_PROMPT = """You are a witty AI assistant for Kokotajlo, a Polish-Chinese startup building GDPR and AI Act-ready AI agents for French businesses.

Key facts about Kokotajlo:
- Duo: Polish software engineer (Tobias) + Chinese business developer (Mengran Zhao)
- Focus: Local LLMs, RAG (Retrieval-Augmented Generation), MCP (Model Context Protocol)
- Target: French enterprises, especially industrial/manufacturing sectors
- Value prop: Compliant AI agents that replace human tasks, IoT automation
- Business model: €200k pilot projects + equity for runway
- Compliance: Ready for AI Act and GDPR from day one

Your personality:
- Witty and engaging
- Professional but approachable
- Respond in French by default, but can switch to English if requested
- Keep responses under 150 words
- Always promote the pilot program and partnership opportunities
- Emphasize compliance and local AI benefits

Be helpful, informative, and encouraging about AI adoption in French businesses."""

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

        # Check if OpenAI is available
        if OPENAI_AVAILABLE and openai_client:
            try:
                # Prepare messages for OpenAI
                messages = [
                    {"role": "system", "content": KOKOTAJLO_SYSTEM_PROMPT},
                    {"role": "user", "content": message}
                ]

                # Call OpenAI API
                response = openai_client.chat.completions.create(
                    model="gpt-4o-mini",
                    messages=messages,  # type: ignore
                    max_tokens=200,
                    temperature=0.7,
                )

                ai_response = response.choices[0].message.content or ""

                if not ai_response:
                    ai_response = "Désolé, je n'ai pas pu générer une réponse appropriée. Contactez-nous directement pour en savoir plus sur nos services."
                else:
                    ai_response = ai_response.strip()

                return ChatResponse(
                    response=ai_response,
                    language=chat_request.language or "fr",
                    timestamp=datetime.utcnow().isoformat() + "Z",
                    conversation_id=f"conv_{random.randint(1000, 9999)}"
                )
            except Exception as e:
                logger.error(f"OpenAI API error: {str(e)}")
                # Fall through to fallback

        # Fallback responses (triggers if no OpenAI or error)
        fallback_responses = [
            "Bonjour ! Je suis l'assistant virtuel de Kokotajlo. Nous créons des agents IA conformes pour les entreprises françaises.",
            "Ah, l'automatisation ! Comme remplacer un café par un distributeur automatique, mais en plus intelligent. Que souhaitez-vous automatiser dans votre entreprise ?",
            "Pilote personnalisé ? C'est comme un essai avant mariage avec l'IA. €200k + equity, c'est notre façon de dire 'nous croyons en votre succès'. Parlons-en !",
            "RAG + MCP + IoT = la sainte trinité de l'industrie 4.0. Vos machines vont enfin pouvoir discuter entre elles... en français bien sûr !",
            "GDPR + AI Act ? C'est notre devise. Nous codons comme des moines copistes : avec dévotion et sans faute. Votre conformité est notre religion.",
            "De la Pologne à la France, en passant par la Chine : notre équipe est aussi internationale que vos ambitions. Prêt pour le pilote ?",
            "Agents IA locaux avec LLMs hébergés en sécurité ? C'est notre spécialité ! Protégeons vos données tout en automatisant vos processus.",
            "Industrie 4.0 vous appelle ? Notre solution IoT avec raisonnement IA transforme vos machines en partenaires intelligents.",
        ]

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
    log_level = os.getenv("LOG_LEVEL", "INFO")

    uvicorn.run(
        "main:app",
        host=host,  # List creates separate sockets for each
        port=port,
        reload=debug,
        log_level=log_level
    )
