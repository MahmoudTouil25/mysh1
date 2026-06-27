# MYSH Frontend Architecture Audit Report

Date: 2026-06-27  
Scope: `frontend` Next.js application, current App Router implementation, reused React components, SEO pages, content structure, build/lint maturity, and production readiness.

## Executive Summary

The frontend has been migrated from a Vite-style React application into a Next.js App Router application. The new version uses Next.js for routing, static generation, metadata, sitemap, robots, canonical URLs, and structured data. Existing React components and the visual design system were mostly preserved and reused.

Overall production maturity: **medium**.

The application now builds successfully and generates static pages for the main marketing/content routes. The largest remaining production concerns are cleanup of Vite-era files/dependencies, fixing the lint script/tooling, replacing temporary/static content with real business content or CMS/API-backed data, and completing image optimization consistency.

## Current Technical Stack

### Runtime and Framework

- **Next.js 16.2.9**
- **React 19.2.6**
- **React DOM 19.2.6**
- **TypeScript 6.0.2**
- **App Router** under `frontend/app`
- **Turbopack** through Next.js

### Styling

- **Tailwind CSS 4.3.1**
- **@tailwindcss/postcss 4.3.1**
- Global CSS entry: `frontend/app/globals.css`
- PostCSS config: `frontend/postcss.config.mjs`

### SEO and Metadata

- Next.js `metadata` and `generateMetadata()`
- Static generation with `generateStaticParams()`
- Sitemap route: `frontend/app/sitemap.ts`
- Robots route: `frontend/app/robots.ts`
- JSON-LD helpers: `frontend/src/lib/schema.ts`
- SEO config/helpers: `frontend/src/lib/seo.ts`

### Data and Content

- Temporary static content modules:
  - `frontend/src/content/services.ts`
  - `frontend/src/content/equipment.ts`
  - `frontend/src/content/blog.ts`
  - `frontend/src/content/events.ts`
  - `frontend/src/content/projects.ts`
  - `frontend/src/content/csr.ts`
- Type models:
  - `frontend/src/types/content.ts`
  - `frontend/src/types/equipment.ts`
  - `frontend/src/types/service.ts`

### Legacy / Remaining Vite Artifacts

These files/dependencies still exist and should be reviewed:

- `frontend/vite.config.ts`
- `frontend/index.html`
- `frontend/tsconfig.app.json`
- `frontend/tsconfig.node.json`
- `frontend/src/main.tsx`
- `frontend/src/App.tsx`
- `frontend/src/App.css`
- `frontend/src/assets/react.svg`
- `frontend/src/assets/vite.svg`
- `@tailwindcss/vite`
- `@vitejs/plugin-react`
- `vite`
- Vite-oriented README text in `frontend/README.md`
- Vite-oriented ESLint rule reference in `frontend/eslint.config.js`

They do not currently block the Next build, but they make the repository look mixed and less production-polished.

## Application Structure

### Top-Level Frontend Structure

```txt
frontend/
  app/
    layout.tsx
    globals.css
    sitemap.ts
    robots.ts
    (marketing)/
    (content)/

  src/
    components/
    content/
    hooks/
    i18n/
    layout/
    lib/
    services/
    types/
    utils/
    views/

  public/
    images/
    logo and favicon assets

  next.config.mjs
  postcss.config.mjs
  tsconfig.json
  package.json
```

### App Router Groups

The application uses route groups correctly:

- `(marketing)` for homepage, services, equipment, CSR, and contact.
- `(content)` for blog, events, and projects.

These route groups do not affect public URLs.

## Global Layout

File: `frontend/app/layout.tsx`

Responsibilities:

- Imports global CSS.
- Defines root metadata.
- Sets `metadataBase`.
- Adds Open Graph defaults.
- Wraps all pages in `GlobalShell`.
- Injects Organization / LocalBusiness JSON-LD.

File: `frontend/src/components/layout/GlobalShell.tsx`

Responsibilities:

- Holds language state.
- Sets `lang` and `dir`.
- Renders global Navbar.
- Wraps route output in `<main>`.
- Renders global Footer.
- Renders Floating WhatsApp globally.

Observation:

`GlobalShell` is a client component because it manages language state. This is acceptable, and Server Component page content can still be passed as children. The tradeoff is that global language state is currently client-only and not URL/cookie based, so metadata and static page content always default to English.

## Page and Route Map

### Marketing Routes

| URL | File | Rendering | Purpose |
| --- | --- | --- | --- |
| `/` | `app/(marketing)/page.tsx` | Static | Homepage using existing `HomePage` / `LandingPage` components |
| `/services` | `app/(marketing)/services/page.tsx` | Static | Services listing page |
| `/services/[slug]` | `app/(marketing)/services/[slug]/page.tsx` | SSG | Service detail pages |
| `/equipment` | `app/(marketing)/equipment/page.tsx` | Static + client interactivity | Equipment listing with filters/search/view toggle |
| `/equipment/[slug]` | `app/(marketing)/equipment/[slug]/page.tsx` | SSG | Equipment detail pages |
| `/csr` | `app/(marketing)/csr/page.tsx` | Static | CSR page |
| `/contact` | `app/(marketing)/contact/page.tsx` | Static | Contact / quote request guidance |

### Content Routes

| URL | File | Rendering | Purpose |
| --- | --- | --- | --- |
| `/blog` | `app/(content)/blog/page.tsx` | Static | Blog listing |
| `/blog/[slug]` | `app/(content)/blog/[slug]/page.tsx` | SSG | Blog post detail pages |
| `/events` | `app/(content)/events/page.tsx` | Static | Events listing |
| `/events/[slug]` | `app/(content)/events/[slug]/page.tsx` | SSG | Event detail pages |
| `/projects` | `app/(content)/projects/page.tsx` | Static | Projects listing |
| `/projects/[slug]` | `app/(content)/projects/[slug]/page.tsx` | SSG | Project detail pages |

### Technical SEO Routes

| URL | File | Purpose |
| --- | --- | --- |
| `/sitemap.xml` | `app/sitemap.ts` | Lists static and dynamic URLs |
| `/robots.txt` | `app/robots.ts` | Allows crawling and references sitemap |

## Generated Pages

The latest production build generated 30 pages:

- 8 static marketing/content listing pages.
- 4 service detail pages.
- 4 equipment detail pages.
- 4 blog post detail pages.
- 3 event detail pages.
- 3 project detail pages.
- Sitemap, robots, and not-found route.

Confirmed dynamic examples:

```txt
/services/marine-port-equipment-rental
/services/airport-infrastructure-machinery-rental
/services/earthmoving-excavation-equipment-rental
/services/road-maintenance-machinery-rental

/equipment/cat-336gc-excavator
/equipment/cat-349dl-excavator
/equipment/komatsu-hm400-3r-articulated-hauler
/equipment/komatsu-d115a-bulldozer

/blog/choosing-excavator-size-for-uae-projects
/blog/equipment-rental-planning-for-road-maintenance
/blog/marine-project-machinery-rental-checklist
/blog/why-static-equipment-pages-help-contractors

/events/dubai-infrastructure-rental-briefing
/events/marine-equipment-readiness-workshop
/events/road-maintenance-equipment-day

/projects/dubai-logistics-yard-earthworks
/projects/abu-dhabi-road-rehabilitation-support
/projects/sharjah-industrial-plot-preparation
```

## Component Architecture

### Layout Components

- `Navbar.tsx`
- `Footer.tsx`
- `GlobalShell.tsx`
- `FloatingWhatsApp.tsx`
- `LanguageToggle.tsx`

The Navbar now uses `next/link` and `usePathname()` for active state. Navbar, Footer, and Floating WhatsApp are global, which avoids duplicating layout in every page.

### Landing Components

- `LandingPage.tsx`
- `HeroSection.tsx`
- `SpecializedServicesSection.tsx`
- `OperationalReachSection.tsx`
- `FaqSection.tsx`

These preserve the original homepage visual design and content system. `FaqSection` is correctly marked as a client component because it uses state.

### Services Components

- `ServiceCard.tsx`
- `ServicesHero.tsx`
- `ServicesSpecializations.tsx`
- `ServicesResilience.tsx`
- `ServicesProcess.tsx`
- `ServicesFaq.tsx`
- `ServicesCTA.tsx`

The listing route currently uses `ServiceCard` with static service content. Some older service section components remain available and reused by `ServicesPage`, though `/services` now uses the new SEO listing structure.

### Equipment Components

- `EquipmentCard.tsx`
- `EquipmentGrid.tsx`
- `EquipmentList.tsx`
- `EquipmentListItem.tsx`
- `EquipmentToolbar.tsx`
- `EquipmentFilterPanel.tsx`
- `EquipmentFilterTags.tsx`
- `EquipmentResultsHeader.tsx`
- `EquipmentEmptyState.tsx`
- `EquipmentViewToggle.tsx`

The equipment listing is client-side because filters, search, pagination, and view toggles require state. It receives static initial data from `src/content/equipment.ts`, so the page still has SEO-visible content.

### Content Components

- `BlogCard.tsx`
- `EventCard.tsx`
- `ProjectCard.tsx`
- `ContentHero.tsx`
- `JsonLd.tsx`

These are clean, reusable components for content listing/detail pages.

## Data Flow

### Static Content Flow

Static modules under `src/content` provide typed records for pages:

```txt
src/content/services.ts  -> /services and /services/[slug]
src/content/equipment.ts -> /equipment and /equipment/[slug]
src/content/blog.ts      -> /blog and /blog/[slug]
src/content/events.ts    -> /events and /events/[slug]
src/content/projects.ts  -> /projects and /projects/[slug]
src/content/csr.ts       -> /csr
```

This is simple and stable for an initial production website. For a larger content operation, a CMS or API-backed content layer would be better.

### Equipment API Compatibility

`src/services/api.ts` still exists and reads from `NEXT_PUBLIC_API_URL`. The equipment listing falls back to API fetches only when no initial static equipment/categories are provided.

This is useful for future API integration, but the current public `/equipment` page uses static initial content.

## SEO Architecture

### Strengths

- Every main listing page has metadata.
- Dynamic detail pages use `generateMetadata()`.
- Detail pages use `generateStaticParams()`.
- Canonical URLs are generated.
- Open Graph metadata is generated.
- Sitemap includes all current static and dynamic routes.
- Robots allows crawling and references sitemap.
- JSON-LD exists for:
  - Organization / LocalBusiness
  - Service
  - Article
  - Event
  - Product / Equipment
  - BreadcrumbList

### Gaps

- `siteConfig.url` defaults to `https://mysh-equipment.com`; production should set `NEXT_PUBLIC_SITE_URL` to the final real domain.
- Open Graph images use existing equipment/site images, but not all are true 1200x630 social images.
- Arabic language content is not fully wired into URL structure or metadata.
- Some content is temporary and should be replaced with verified company copy.

## Rendering Model

### Server / Static First

The following routes are server-rendered/static by default:

- Homepage
- Services listing
- Service detail
- Equipment detail
- CSR
- Contact
- Blog listing/detail
- Events listing/detail
- Projects listing/detail
- Sitemap
- Robots

### Client Components

Client components are used where appropriate:

- `GlobalShell` for language state.
- `Navbar` for mobile menu and active route state.
- `LanguageToggle` for language toggling.
- `FaqSection` and `ServicesFaq` for accordion state.
- `EquipmentListPage` for filters/search/pagination/view mode.
- `EquipmentDetailPage` remains client-side but is no longer the primary SEO detail route.

Observation:

The client/server split is reasonable, but `GlobalShell` makes the layout interactive globally. If maximum static purity is required, language handling should move to route segments, cookies, or server-detected locale instead of global client state.

## Build and Verification Results

### Build

Command:

```txt
npm.cmd run build
```

Result:

```txt
Passed
```

The production build completed successfully and generated all static/SSG routes.

### Lint

Command:

```txt
npm.cmd run lint
```

Result:

```txt
Failed
```

Failure message:

```txt
Invalid project directory provided, no such directory: C:\Users\mahmo\mysh\MYSH\frontend\lint
```

Cause:

The script is currently:

```json
"lint": "next lint"
```

With the installed Next.js version/setup, this command is not functioning as expected. It appears to treat `lint` as a project directory. The lint script should be replaced with an ESLint command that matches the project config, for example:

```json
"lint": "eslint ."
```

The ESLint config should also be updated away from Vite-specific React Refresh settings.

## Production Maturity Assessment

### Rating

Current maturity: **Medium**

The site is buildable, route-complete, SEO-aware, and deployable as a Next app. It is not yet fully production-polished because there are still migration leftovers, linting is not operational, and some content/assets are placeholder-level.

### Production-Ready Areas

- Next App Router route structure is in place.
- Required route map exists.
- Build passes.
- Static generation works.
- Metadata exists for major routes.
- Sitemap and robots exist.
- Tailwind CSS is correctly wired through PostCSS.
- Navbar/Footer/WhatsApp are global.
- Internal navigation uses real routes instead of hash-only navigation.
- Typed static content models exist.
- JSON-LD helpers exist.

### Needs Work Before Serious Production Launch

1. **Fix linting**
   - Replace `next lint` with a working ESLint command.
   - Remove Vite-specific ESLint settings.
   - Add Next/React lint rules suitable for App Router.

2. **Remove Vite leftovers**
   - Remove Vite dependencies if the project is now permanently Next-based.
   - Remove `vite.config.ts`, `index.html`, old Vite tsconfig files, and unused assets.
   - Update `frontend/README.md`.

3. **Improve image strategy**
   - Convert remaining important `<img>` tags to `next/image` where practical.
   - Keep simple SVG/logo exceptions where appropriate.
   - Add dedicated Open Graph images.

4. **Replace temporary content**
   - Current content is professional seed content, but should be reviewed by the business.
   - Add real contact details, phone, email, address, and WhatsApp number.
   - Replace placeholder domain if needed.

5. **Complete i18n strategy**
   - The UI has language state, but routes and metadata are English-first.
   - If Arabic is required for SEO, implement locale routes such as `/ar/...`.

6. **Testing**
   - No automated frontend tests are currently visible.
   - Add smoke tests for route rendering.
   - Add component tests for equipment filters.
   - Add sitemap/metadata checks.

7. **Deployment configuration**
   - Confirm final hosting platform.
   - Set `NEXT_PUBLIC_SITE_URL`.
   - Set `NEXT_PUBLIC_API_URL` if API-backed equipment is used.
   - Set `NEXT_PUBLIC_MYSH_WHATSAPP_NUMBER` and `NEXT_PUBLIC_MYSH_SALES_EMAIL`.

## Architecture Strengths

- Good separation between routes, components, content, types, and libraries.
- App Router route groups are correctly used.
- Existing UI was reused instead of rewritten.
- SEO pages are mostly static/server-first.
- Dynamic detail pages are generated from typed static data.
- The global layout is centralized.
- Sitemap generation is data-driven.
- Types provide a good foundation for future CMS/API integration.

## Architecture Risks

- The repository is still visibly mixed between Vite and Next.
- `src/views` contains old page-style components; this is acceptable, but the naming should be documented.
- Equipment list is a large client component; this is justified by filtering but could be split further.
- Some components still use raw `<img>`.
- Lint script is broken.
- No automated browser tests or unit tests exist for the new frontend.
- The frontend is nested inside a root NestJS backend repository, so deployment scripts must clearly target `frontend`.

## Recommended Cleanup Plan

### Priority 1

- Fix the lint script and ESLint config.
- Remove unused Vite dependencies and files.
- Update `frontend/README.md` to describe Next.js, not Vite.
- Confirm all required environment variables.

### Priority 2

- Replace placeholder content with approved business copy.
- Add real contact information.
- Add final domain through `NEXT_PUBLIC_SITE_URL`.
- Convert remaining high-impact images to `next/image`.
- Add real Open Graph images.

### Priority 3

- Add automated smoke tests for:
  - `/`
  - `/services`
  - `/equipment`
  - one dynamic service page
  - one dynamic equipment page
  - `/sitemap.xml`
  - `/robots.txt`
- Add a CMS or structured content pipeline if non-developers will manage pages.
- Implement proper Arabic route-level i18n if bilingual SEO is required.

## Final Verdict

The new frontend is now a functional, SEO-aware Next.js App Router website with a strong route/content foundation. It is suitable for staging and internal review. Before public production launch, the codebase should be cleaned of Vite migration leftovers, linting should be repaired, content should be finalized, and basic route smoke tests should be added.

The most important technical blocker is not the build: the build passes. The most important blocker is operational maturity around linting, cleanup, final content, environment configuration, and testing.
