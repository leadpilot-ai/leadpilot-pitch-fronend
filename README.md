# LeadPilot AI Frontend

Marketing and demo landing page for LeadPilot AI, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js 18.18+ (Node.js 20+ recommended)
- npm 9+

## Environment Setup

1. Copy `.env.local.example` to `.env.local`
2. Set values for your environment:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=923000000000
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/leadpilot/demo
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend Dependency

The interactive chat demo (`/demo` section) calls:

- `POST ${NEXT_PUBLIC_API_URL}/demo/chat`

Expected JSON response shape:

```json
{
	"response": "string",
	"lead_score": 0,
	"status": "HOT"
}
```

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run build
```

## Production Build & Start

```bash
npm run build
npm run start
```

## Deployment

This project is configured for Vercel via `vercel.json`.

Set all `NEXT_PUBLIC_*` variables in your deployment environment before promoting to production.
