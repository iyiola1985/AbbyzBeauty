import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, date, time, notes } = body;

    if (!name || !phone || !email || !service || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // MVP: Log booking to console. In production, integrate with:
    // - Email service (Resend, SendGrid)
    // - Database (Vercel Postgres, Supabase)
    // - WhatsApp API
    console.log("New booking request:", {
      name,
      phone,
      email,
      service,
      date,
      time,
      notes: notes || "(none)",
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
