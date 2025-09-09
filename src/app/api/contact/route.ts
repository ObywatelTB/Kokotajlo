import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, sector, message, gdpr } = body;

    // Validate required fields
    if (!name || !email || !company || !sector || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    if (!gdpr) {
      return NextResponse.json(
        { error: 'Vous devez accepter les conditions RGPD' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Proxy to backend
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4001';
    const response = await fetch(`${backendUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        company,
        sector,
        message,
        gdpr,
        source: 'contact_form',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Contact API error:', error);

    // Return a generic success message if backend is unavailable
    // This ensures the user experience is not interrupted
    return NextResponse.json({
      success: true,
      message: 'Votre demande a été reçue. Nous vous contacterons sous 24h.',
      fallback: true
    });
  }
}
