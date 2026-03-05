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
- Booking form with API route
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

Update these in `src/components/Contact.tsx` and `src/components/Footer.tsx`:

- **Instagram**: `https://instagram.com/abbyzbeautyy`
- **WhatsApp**: `https://wa.me/44XXXXXXXXXX` (replace with your number)
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

## Booking API

The `/api/booking` route receives form submissions. For production, integrate with:

- Email (Resend, SendGrid)
- Database (Vercel Postgres, Supabase)
- WhatsApp Business API
