import { NextResponse } from 'next/server';
import { neon, neonConfig } from '@neondatabase/serverless';

// This helps bypass restricted networks by using HTTP
neonConfig.fetchConnectionCache = true;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      INSERT INTO contact_messages (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}