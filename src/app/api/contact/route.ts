import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Parse the JSON body
  const { name, email, message } = await req.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    // Send the email via Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev', // Or your own domain if verified
        to: 'clementogol@gmail.com',
        subject: `Contact form message from ${name}`,
        reply_to: email,
        text: message,
      }),
    });

    // If Resend API fails
    if (!resendResponse.ok) {
      let errMsg = 'Failed to send email';
      try {
        const err = await resendResponse.json();
        errMsg = typeof err === 'string' ? err : JSON.stringify(err);
      } catch {}
      return NextResponse.json({ error: errMsg }, { status: 500 });
    }

    // Success
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Contact API failed:', error); 
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
