"""
Kokotajlo Backend API
FastAPI application for AI agent services targeting French businesses
"""

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
import os
from dotenv import load_dotenv
from typing import Optional, Dict, Any
import logging
import uvicorn

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=getattr(logging, os.getenv("LOG_LEVEL", "INFO")),
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

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
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("CORS_ORIGINS", "http://localhost:3000").split(","),
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
@app.post("/api/v1/chat")
@limiter.limit("10/minute")
async def chat_endpoint(request: Request, payload: Dict[str, Any]):
    """
    Chat endpoint with AI agent integration
    Rate limited to 10 requests per minute
    """
    try:
        # TODO: Implement OpenAI integration
        # For now, return a placeholder response
        return {
            "response": "Bonjour! Je suis l'assistant IA de Kokotajlo. Comment puis-je vous aider avec vos besoins en automatisation d'entreprise?",
            "language": "fr",
            "timestamp": "2024-01-01T00:00:00Z"
        }
    except Exception as e:
        logger.error(f"Chat endpoint error: {str(e)}")
        raise HTTPException(status_code=500, detail="Erreur interne du serveur")

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
    port = int(os.getenv("API_PORT", 8000))
    debug = os.getenv("DEBUG", "False").lower() == "true"

    uvicorn.run(
        "main:app",
        host=host,
        port=port,
        reload=debug,
        log_level="info"
    )
