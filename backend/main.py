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
from typing import Optional, Dict, Any
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


# Initialize OpenAI client (only if API key is available)
openai_api_key = os.getenv("OPENAI_API_KEY")
if openai_api_key and openai_api_key != "stub":
    openai_client = OpenAI(api_key=openai_api_key)
    OPENAI_AVAILABLE = True
else:
    openai_client = None
    OPENAI_AVAILABLE = False
    logger.warning("OpenAI API key not configured - using fallback responses")

# System prompt for Kokotajlo chatbot
KOKOTAJLO_SYSTEM_PROMPT = """You are a witty AI assistant for Kokotajlo, a Polish-Chinese startup building GDPR and AI Act-ready AI agents for French businesses.

Key facts about Kokotajlo:
- Duo: Polish software engineer (Tobias) + Chinese business developer (Mengran)
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
    Accepts ChatRequest with message, optional language and context
    """
    try:
        import random
        from datetime import datetime

        # Check if OpenAI is available
        if OPENAI_AVAILABLE and openai_client:
            try:
                # Prepare messages for OpenAI
                messages = [
                    {"role": "system", "content": KOKOTAJLO_SYSTEM_PROMPT},
                    {"role": "user", "content": chat_request.message}
                ]

                # Call OpenAI API
                response = openai_client.chat.completions.create(
                    model="gpt-4o-mini",
                    messages=messages,
                    max_tokens=200,  # Keep responses concise
                    temperature=0.7,  # Balanced creativity
                )

                # Extract response
                ai_response = response.choices[0].message.content.strip()

                # Fallback if OpenAI fails
                if not ai_response:
                    ai_response = "Désolé, je n'ai pas pu générer une réponse appropriée. Contactez-nous directement pour en savoir plus sur nos services."

                return ChatResponse(
                    response=ai_response,
                    language=chat_request.language or "fr",
                    timestamp=datetime.utcnow().isoformat() + "Z",
                    conversation_id=f"conv_{random.randint(1000, 9999)}"
                )
            except Exception as e:
                logger.error(f"OpenAI API error: {str(e)}")
                # Fall through to fallback responses

        # Fallback responses when OpenAI is not available or fails
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

        # Final fallback in case of any error
        return ChatResponse(
            response="Désolé, une erreur s'est produite. Veuillez réessayer ou nous contacter directement.",
            language=chat_request.language or "fr",
            timestamp=datetime.utcnow().isoformat() + "Z",
            conversation_id=f"conv_error_{random.randint(1000, 9999)}"
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
    # TODO: Initialize database connections, AI clients, etc.


@app.on_event("shutdown")
async def shutdown_event():
    """Application shutdown event"""
    logger.info("Shutting down Kokotajlo backend...")
    # TODO: Close database connections, cleanup resources, etc.

if __name__ == "__main__":
    host = os.getenv("API_HOST", "0.0.0.0")
    port = int(os.getenv("API_PORT", 4001))
    debug = os.getenv("DEBUG", "False").lower() == "true"

    uvicorn.run(
        "main:app",
        host=host,
        port=port,
        reload=debug,
        log_level="info"
    )
