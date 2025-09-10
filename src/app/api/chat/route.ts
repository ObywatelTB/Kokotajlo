import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const timestamp = new Date().toISOString();
  const requestId = Math.random().toString(36).substring(7);

  console.log(`[${timestamp}] [${requestId}] Chat API request started`);

  try {
    // Parse request body
    const body = await request.json();
    const { message, language = 'fr' } = body;

    console.log(`[${timestamp}] [${requestId}] Request body:`, {
      message: message?.substring(0, 100) + (message?.length > 100 ? '...' : ''),
      language,
      hasMessage: !!message
    });

    // Validate message
    if (!message) {
      console.warn(`[${timestamp}] [${requestId}] Missing message in request`);
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Backend configuration
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4001';
    console.log(`[${timestamp}] [${requestId}] Proxy URL:`, backendUrl);
    console.log(`[${timestamp}] [${requestId}] Incoming body:`, JSON.stringify(body));
    console.log(`[${timestamp}] [${requestId}] Proxying to backend: ${backendUrl}/chat`);

    // Make backend request
    const startTime = Date.now();
    const response = await fetch(`${backendUrl}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        language,
      }),
    });

    const responseTime = Date.now() - startTime;
    console.log(`[${timestamp}] [${requestId}] Backend status:`, response.status);
    console.log(`[${timestamp}] [${requestId}] Backend headers:`, response.headers.get('content-type'));
    console.log(`[${timestamp}] [${requestId}] Backend response time: ${responseTime}ms`);

    // Handle non-OK responses
    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[${timestamp}] [${requestId}] Backend error body:`, errorBody);
      throw new Error(`Backend failed: ${response.status} - ${errorBody}`);
    }

    // Parse successful response
    const data = await response.json();
    console.log(`[${timestamp}] [${requestId}] Backend data preview:`, data.response?.substring(0, 50));
    console.log(`[${timestamp}] [${requestId}] Backend success response:`, {
      hasResponse: !!data.response,
      responseLength: data.response?.length || 0,
      hasError: !!data.error
    });

    console.log(`[${timestamp}] [${requestId}] Chat API request completed successfully`);
    return NextResponse.json(data);

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`[${timestamp}] [${requestId}] Proxy error details:`, errorMessage);

    return NextResponse.json(
      {
        error: 'Erreur de communication avec le serveur',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
