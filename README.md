# Abbyz Beautyy — Luxury Lash & Makeup Website

A high-end beauty salon website for luxury lash extensions and glam makeup services. Built with Next.js, Tailwind CSS, and jQuery animations.

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS**
- **jQuery** (animations only)
- **TypeScript**

## Features

- Hero with luxury aesthetic and soft overlay
- About section with scroll reveal
- Services / Price list with hover effects
- Booking form with deposit → redirects to WhatsApp
- Gallery with lash extension imagery
- Testimonials carousel
- Contact with Instagram & WhatsApp
- Floating WhatsApp booking button

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

Update in `src/lib/services.ts`:
- **WhatsApp number**: `WHATSAPP_NUMBER` (e.g. `447123456789` — no + or spaces)

Update in `src/components/Contact.tsx`:
- **Instagram**: `https://instagram.com/abbyzbeautyy`
- **Phone**: `+44 XXXX XXX XXX`
- **Location**: `London, UK`

## Deploy to Vercel

```bash
npm run build
```

Then connect your repo to [Vercel](https://vercel.com) or run:

```bash
npx vercel
```

## Booking Flow

Customers fill the form and are redirected to WhatsApp with a pre-filled message and their deposit amount. Deposit is paid via WhatsApp to confirm the booking.

## Booking API (optional)

The `/api/booking` route can be used for logging. For production, integrate with:

- Email (Resend, SendGrid)
- Database (Vercel Postgres, Supabase)
- WhatsApp Business API
