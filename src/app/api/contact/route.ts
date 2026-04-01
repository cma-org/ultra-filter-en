import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  honeypot?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  // Honeypot check
  if (body.honeypot) {
    return NextResponse.json({ success: true });
  }

  const { firstName, lastName, email, subject, message } = body;

  if (!firstName?.trim() || !lastName?.trim()) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }
  if (!email?.trim() || !isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 });
  }
  if (!subject?.trim()) {
    return NextResponse.json({ error: 'Subject is required' }, { status: 400 });
  }
  if (!message?.trim() || message.trim().length < 10) {
    return NextResponse.json({ error: 'Message must be at least 10 characters' }, { status: 400 });
  }

  // In production, send email via SMTP/SES/Resend here
  // For now, log and return success
  console.log('Contact form submission:', { firstName, lastName, email, subject });

  return NextResponse.json({ success: true });
}
