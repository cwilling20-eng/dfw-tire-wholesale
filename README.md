# DFW Tire Wholesale

Production website for DFW Tire Wholesale — a used and new tire shop in Arlington, TX.

## Tech Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Anthropic Claude API** for the AI chatbot
- Bilingual: English / Spanish (full i18n)

## Getting Started

```bash
npm install
cp .env.local.example .env.local
# Add your Anthropic API key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | API key for the Claude-powered chatbot |

## Deployment

Deploy to Vercel:

```bash
vercel deploy
```

Set `ANTHROPIC_API_KEY` in your Vercel project environment variables.

## Pages

- `/` — Home (hero, value props, parallax, reviews, CTA)
- `/services` — 9 services with cards
- `/about` — Story, team, 3 R's
- `/contact` — Map, hours, phone
