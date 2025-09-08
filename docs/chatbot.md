# Chatbot Integration Documentation

## Overview

Kokotajlo's chatbot system provides an interactive AI assistant for French enterprise visitors. The system consists of a floating React widget on the frontend that communicates with a FastAPI backend powered by OpenAI's GPT-4o-mini model.

## Architecture

### Frontend Components

#### Chatbot Widget (`/src/components/Chatbot.tsx`)
- **Fixed positioning**: Bottom-right floating widget
- **State management**: React hooks for messages, loading, and UI state
- **Real-time messaging**: WebSocket-like experience with fetch API
- **Responsive design**: Mobile-friendly with Tailwind CSS
- **Auto-scroll**: Messages container scrolls to latest message
- **Error handling**: Graceful fallbacks for network issues

**Features:**
- Minimizable/maximizable interface
- Message bubbles with timestamps
- Loading indicators with animated dots
- French language support
- Accessible keyboard navigation

#### API Route (`/src/app/api/chat/route.ts`)
- **Next.js API route**: Proxies requests to backend
- **Error handling**: Comprehensive error responses
- **Environment configuration**: Configurable backend URL
- **CORS ready**: Handles cross-origin requests

### Backend Implementation

#### FastAPI Endpoint (`/backend/main.py`)
- **OpenAI Integration**: GPT-4o-mini model with custom system prompt
- **Rate limiting**: 10 requests per minute with SlowAPI
- **Pydantic models**: Type-safe request/response validation
- **Fallback system**: Witty responses when OpenAI is unavailable
- **Logging**: Comprehensive error and request logging

#### System Prompt
The chatbot uses a detailed system prompt that establishes Kokotajlo's brand identity:
- Polish-Chinese startup background
- Focus on compliant AI agents (GDPR/AI Act)
- French enterprise targeting
- Pilot program emphasis (€200k + equity)
- Professional yet approachable personality

## Configuration

### Environment Variables

#### Backend (`/backend/.env`)
```bash
OPENAI_API_KEY=sk-your-openai-api-key-here
CORS_ORIGINS=http://localhost:4000,https://your-domain.com
LOG_LEVEL=INFO
```

#### Frontend (`/.env.local`)
```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:4001
NEXT_PUBLIC_SITE_URL=http://localhost:4000
```

## API Specifications

### Chat Endpoint

**POST** `/chat`

**Request Body:**
```json
{
  "message": "Bonjour, pouvez-vous me parler de vos services ?",
  "language": "fr",
  "context": {}
}
```

**Response:**
```json
{
  "response": "Bien sûr ! Nous sommes spécialisés dans...",
  "language": "fr",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "conversation_id": "conv_1234"
}
```

**Error Response:**
```json
{
  "error": "Erreur de communication avec le serveur",
  "response": "Désolé, une erreur technique s'est produite."
}
```

## Features

### Frontend Widget
- ✅ Fixed bottom-right positioning
- ✅ Expandable/collapsible interface
- ✅ Real-time message display
- ✅ Loading states and animations
- ✅ Error handling and recovery
- ✅ Mobile responsive design
- ✅ Accessibility features

### Backend Processing
- ✅ OpenAI GPT-4o-mini integration
- ✅ Kokotajlo-branded system prompt
- ✅ Rate limiting (10 req/min)
- ✅ Pydantic validation
- ✅ Comprehensive error handling
- ✅ Fallback responses
- ✅ Request logging

### Business Logic
- ✅ French language focus
- ✅ Enterprise B2B messaging
- ✅ Pilot program promotion
- ✅ Compliance emphasis
- ✅ Professional tone
- ✅ Call-to-action integration

## Usage

### Starting the Chatbot

1. **Frontend**: Widget appears automatically on all pages
2. **User interaction**: Click the floating bot icon
3. **Initial message**: "Bonjour! Demandez-moi sur nos agents IA conformes."
4. **Conversation flow**: User messages → API call → AI response

### Testing

#### Manual Testing
```bash
# Test backend directly
curl -X POST http://localhost:4001/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello", "language": "fr"}'

# Test via Next.js API
curl -X POST http://localhost:4000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello", "language": "fr"}'
```

#### Development Testing
1. Start both servers: `npm run dev:all`
2. Visit `http://localhost:4000`
3. Click the chatbot widget (bottom-right)
4. Send test messages
5. Verify responses appear correctly

## Customization

### Modifying System Prompt
Edit the `KOKOTAJLO_SYSTEM_PROMPT` variable in `/backend/main.py` to:
- Change brand messaging
- Update service descriptions
- Modify personality traits
- Adjust response guidelines

### Styling the Widget
Update `/src/components/Chatbot.tsx` to:
- Change colors and themes
- Modify positioning
- Add new UI features
- Customize animations

### Rate Limiting
Adjust rate limits in `/backend/main.py`:
```python
@limiter.limit("10/minute")  # Change this value
```

## Deployment Considerations

### Production Setup
1. **OpenAI API Key**: Set real API key in production environment
2. **CORS Origins**: Update allowed origins for production domains
3. **Rate Limiting**: Adjust limits based on expected traffic
4. **Monitoring**: Add logging and monitoring for chatbot interactions
5. **Backup Responses**: Ensure fallback responses work without OpenAI

### Performance Optimization
- **Caching**: Consider caching common responses
- **Connection Pooling**: Optimize OpenAI client connections
- **Message History**: Implement conversation persistence (future feature)
- **CDN**: Serve static assets via CDN

## Troubleshooting

### Common Issues

1. **Widget not appearing**: Check if Chatbot component is imported in layout.tsx
2. **API errors**: Verify backend is running and CORS is configured
3. **OpenAI failures**: Check API key and network connectivity
4. **Rate limiting**: Wait 1 minute between requests or increase limits

### Debug Mode
Enable debug logging:
```bash
# Backend
LOG_LEVEL=DEBUG

# Frontend
console.log() statements in browser dev tools
```

### Error Logs
Check logs for:
- OpenAI API errors
- Network connectivity issues
- Rate limiting violations
- Pydantic validation errors

## Future Enhancements

- **Conversation History**: Persistent chat sessions
- **Multi-language Support**: Dynamic language switching
- **File Uploads**: Document analysis capabilities
- **Voice Integration**: Speech-to-text and text-to-speech
- **Analytics**: Chatbot interaction tracking
- **A/B Testing**: Different system prompts and responses
- **Integration**: Connect with CRM and lead management systems

## Security Considerations

- **API Key Protection**: Never expose OpenAI keys in frontend
- **Rate Limiting**: Prevents abuse and manages costs
- **Input Validation**: Pydantic models validate all inputs
- **Error Handling**: No sensitive information in error messages
- **CORS Policy**: Restrict to allowed origins only

This chatbot system provides an engaging, professional interface for French enterprises to learn about Kokotajlo's AI solutions while maintaining the startup's brand identity and business objectives.
