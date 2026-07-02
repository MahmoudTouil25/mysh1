# MYSH Frontend

Next.js App Router frontend for the MYSH heavy equipment rental website.

## Stack

- Next.js
- TypeScript
- React
- Tailwind CSS

## Project Structure

```text
frontend/
  app/                 Next.js App Router routes, layout, metadata, sitemap and robots
  public/              Static assets served from the site root
  src/
    components/        Reusable UI and feature components
    content/           Static SEO/content records for blog, events, projects, services and equipment
    hooks/             Client-side data and UI hooks
    i18n/              English and Arabic UI copy plus language context
    lib/               SEO, schema and slug helpers
    services/          API client helpers
    types/             Shared TypeScript types
    utils/             Filtering and quote-message utilities
    views/             Page-level React compositions imported by App Router pages
```

## Environment

Create `frontend/.env.local` for local development:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_MYSH_WHATSAPP_NUMBER=971XXXXXXXXX
NEXT_PUBLIC_MYSH_SALES_EMAIL=sales@mysh.ae
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Only variables prefixed with `NEXT_PUBLIC_` are available in browser-side code.

## Development

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

The Next.js dev server normally runs on:

```text
http://localhost:3000
```

The backend API should run separately, usually on:

```text
http://localhost:3001
```

## Scripts

```bash
npm run dev      # Start Next.js in development mode
npm run build    # Create a production build
npm run start    # Start the production server after build
npm run lint     # Run ESLint
```

## Routing

Routes are defined in `frontend/app`.

Examples:

- `/`
- `/services`
- `/equipment`
- `/equipment/[slug]`
- `/projects`
- `/blog`
- `/events`
- `/csr`
- `/contact`

Route group names such as `(marketing)` and `(content)` are organizational only and do not appear in URLs.

## Data Flow

- Equipment listing and numeric equipment detail pages fetch data from the backend API using `src/services/api.ts`.
- Static content pages use records under `src/content`.
- Shared English and Arabic UI copy lives under `src/i18n`.

## Notes

This frontend is intended to be a clean Next.js + TypeScript application. Keep browser-exposed environment variables under the `NEXT_PUBLIC_` prefix and avoid adding non-Next application entrypoints or build tooling.
