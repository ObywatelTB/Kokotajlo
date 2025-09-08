# Backend Documentation

## Overview

FastAPI backend for Kokotajlo AI agents platform targeting French businesses. Built with Poetry for dependency management, featuring CORS support, rate limiting, and stubbed AI chatbot endpoints.

## Tech Stack

- **Framework**: FastAPI (Python async web framework)
- **Dependency Management**: Poetry
- **Rate Limiting**: SlowAPI
- **CORS**: Built-in FastAPI middleware
- **Environment**: python-dotenv
- **Validation**: Pydantic v2
- **Deployment**: Railway (recommended)

## Quick Start

### Prerequisites
- Python 3.9+
- Poetry

### Installation
```bash
cd backend
poetry install
```

### Environment Setup
```bash
cp env.example .env
# Edit .env with your configuration
```

### Development
```bash
# Using Poetry
poetry run uvicorn main:app --reload --host 0.0.0.0 --port 4001

# Or using VSCode tasks
# dev:backend task in .vscode/tasks.json
```

## API Endpoints

### Health Check
```http
GET /health
```
Returns basic health status of the service.

### API Status
```http
GET /api/v1/status
```
Returns API status, version, and features.

### Chat Endpoint
```http
POST /chat
Content-Type: application/json

{
  "message": "Bonjour, pouvez-vous me parler de vos services ?",
  "language": "fr",
  "context": {}
}
```

**Response:**
```json
{
  "response": "Ah, l'automatisation ! Comme remplacer un café par un distributeur automatique...",
  "language": "fr",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "conversation_id": "conv_1234"
}
```

**Rate Limit**: 10 requests per minute

## Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `API_HOST` | `0.0.0.0` | Server host |
| `API_PORT` | `4001` | Server port |
| `CORS_ORIGINS` | `http://localhost:4000` | Allowed CORS origins (comma-separated) |
| `LOG_LEVEL` | `INFO` | Logging level |
| `DEBUG` | `True` | Debug mode |
| `OPENAI_API_KEY` | - | OpenAI API key (for future integration) |

### CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:4000` (Next.js frontend)
- `https://your-railway-url` (production deployment)

Update `CORS_ORIGINS` in your `.env` file for additional domains.

## Pydantic Models

### ChatRequest
```python
class ChatRequest(BaseModel):
    message: str
    language: Optional[str] = "fr"
    context: Optional[Dict[str, Any]] = None
```

### ChatResponse
```python
class ChatResponse(BaseModel):
    response: str
    language: str
    timestamp: str
    conversation_id: Optional[str] = None
```

## Features

- ✅ **Health Check**: `/health` endpoint
- ✅ **CORS Support**: Configurable origins
- ✅ **Rate Limiting**: 10 requests/minute on chat endpoint
- ✅ **Pydantic Validation**: Type-safe request/response models
- ✅ **Witty Responses**: Placeholder responses for testing
- ✅ **Logging**: Comprehensive logging setup
- ✅ **Error Handling**: Custom exception handlers
- ✅ **Poetry Management**: Clean dependency management

## Future Enhancements

- OpenAI GPT integration
- Conversation persistence
- User authentication
- Database integration (PostgreSQL)
- Advanced rate limiting
- Request/response logging
- API documentation enhancement

## Testing

### Manual Testing
```bash
# Health check
curl http://localhost:4001/health

# Chat endpoint
curl -X POST http://localhost:4001/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello", "language": "fr"}'
```

### API Documentation
Visit `http://localhost:4001/docs` for interactive API documentation.

## Deployment

### Railway
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push to main
4. Update CORS_ORIGINS with production URL

### Manual
```bash
cd backend
poetry run uvicorn main:app --host 0.0.0.0 --port $PORT
```

## Dependencies

Key packages managed by Poetry:
- `fastapi` - Web framework
- `uvicorn` - ASGI server
- `slowapi` - Rate limiting
- `python-dotenv` - Environment variables
- `httpx` - HTTP client (for future API calls)

## Contributing

1. Follow Poetry workflow
2. Add tests for new endpoints
3. Update documentation
4. Follow existing code patterns
5. Test CORS and rate limiting

## Troubleshooting

### Common Issues

1. **CORS Errors**: Check `CORS_ORIGINS` in `.env`
2. **Port Conflicts**: Ensure ports 4000 (frontend) and 4001 (backend) are available
3. **Rate Limiting**: Wait 1 minute between requests or increase limits
4. **Import Errors**: Run `poetry install` to install dependencies

### Logs
Check application logs for detailed error information. Logging level can be adjusted via `LOG_LEVEL` environment variable.
