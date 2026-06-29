# MYSH Code Architecture and Modification Guide

This repository contains two main applications:

- `src/`: NestJS backend API that reads equipment/category data from Excel files.
- `frontend/`: Next.js frontend for the public MYSH website.

The public website currently depends mostly on static TypeScript content in `frontend/src/content/*` for SEO-friendly pages. The backend API still exists and can serve Excel-backed equipment/category data, but the active Next pages for `/equipment` and `/equipment/[slug]` are using the static catalog in `frontend/src/content/equipment.ts`.

## High-Level Structure

```text
MYSH/
  src/                         NestJS backend API
  data/                        Excel files used by the backend
  frontend/
    app/                       Next.js App Router pages
    src/
      content/                 Main SEO/content data arrays
      views/                   Page-level client views
      components/              Reusable UI components
      i18n/                    English/Arabic UI copy
      lib/                     SEO, schema, slug helpers
      hooks/                   Client-side state/filter hooks
      services/                API fetch helpers
      types/                   Shared TypeScript types
    public/                    Images, logos, favicon assets
```

## Frontend Architecture

The frontend is a Next.js App Router project.

- Run from: `frontend/`
- Dev command: `npm run dev`
- Build command: `npm run build`
- Global layout: `frontend/app/layout.tsx`
- Global styles: `frontend/app/globals.css`
- Main shell with navbar/footer/WhatsApp: `frontend/src/components/layout/GlobalShell.tsx`
- Path alias: `@/*` maps to `frontend/src/*` in `frontend/tsconfig.json`

### Active Page Routes

Most public pages are under route groups in `frontend/app/`.

```text
frontend/app/(marketing)/page.tsx                    Home page
frontend/app/(marketing)/services/page.tsx           Services listing page
frontend/app/(marketing)/services/[slug]/page.tsx    Service detail pages
frontend/app/(marketing)/equipment/page.tsx          Equipment listing page
frontend/app/(marketing)/equipment/[slug]/page.tsx   Equipment detail pages
frontend/app/(marketing)/contact/page.tsx            Contact page
frontend/app/(marketing)/csr/page.tsx                CSR page
frontend/app/(content)/blog/page.tsx                 Blog listing
frontend/app/(content)/blog/[slug]/page.tsx          Blog detail
frontend/app/(content)/events/page.tsx               Events listing
frontend/app/(content)/events/[slug]/page.tsx        Event detail
frontend/app/(content)/projects/page.tsx             Projects listing
frontend/app/(content)/projects/[slug]/page.tsx      Project detail
frontend/app/sitemap.ts                              XML sitemap
frontend/app/robots.ts                               robots.txt
```

Route group names like `(marketing)` and `(content)` do not appear in the URL. For example, `frontend/app/(marketing)/services/page.tsx` serves `/services`.

## SEO Architecture

SEO is split between global defaults, per-page metadata, structured data, and content records.

### Global SEO

Edit global site identity here:

- `frontend/src/lib/seo.ts`

Important fields:

- `siteConfig.name`
- `siteConfig.shortName`
- `siteConfig.url`
- `siteConfig.description`

The global metadata wrapper is here:

- `frontend/app/layout.tsx`

This sets:

- default title template
- default description
- Open Graph defaults
- global organization JSON-LD schema

### Per-Page SEO

Static pages define `metadata` directly in their page file using `buildMetadata`.

Examples:

- Home: `frontend/app/(marketing)/page.tsx`
- Services list: `frontend/app/(marketing)/services/page.tsx`
- Equipment list: `frontend/app/(marketing)/equipment/page.tsx`
- Contact: `frontend/app/(marketing)/contact/page.tsx`

Dynamic pages generate metadata from content arrays:

- Service detail SEO comes from `frontend/src/content/services.ts`
- Equipment detail SEO comes from `frontend/src/content/equipment.ts`
- Blog SEO comes from `frontend/src/content/blog.ts`
- Event SEO comes from `frontend/src/content/events.ts`
- Project SEO comes from `frontend/src/content/projects.ts`
- CSR SEO comes from `frontend/src/content/csr.ts`

Each SEO content item normally includes:

```ts
slug: string;
title: string;
metaTitle: string;
metaDescription: string;
image: string;
```

### Structured Data

JSON-LD schemas are generated in:

- `frontend/src/lib/schema.ts`

Important functions:

- `organizationSchema()`
- `serviceSchema(service)`
- `productSchema(item)`
- `articleSchema(post)`
- `eventSchema(event)`
- `projectSchema(project)`
- `breadcrumbSchema(items)`

The schema is injected with:

- `frontend/src/components/content/JsonLd.tsx`

### Sitemap and Robots

Edit sitemap route inclusion here:

- `frontend/app/sitemap.ts`

It includes static routes and dynamic routes from:

- `services`
- `equipmentCatalog`
- `blogPosts`
- `events`
- `projects`

Edit robots output here:

- `frontend/app/robots.ts`

## Services Pages

There are two service systems that are related but not identical.

### Services Listing Page

URL:

- `/services`

Route file:

- `frontend/app/(marketing)/services/page.tsx`

Page view:

- `frontend/src/views/ServicesPage.tsx`

Sections used by the page:

- `frontend/src/components/services/ServicesHero.tsx`
- `frontend/src/components/services/ServicesSpecializations.tsx`
- `frontend/src/components/services/ServicesResilience.tsx`
- `frontend/src/components/services/ServicesProcess.tsx`
- `frontend/src/components/services/ServicesFaq.tsx`
- `frontend/src/components/services/ServicesCTA.tsx`

Text/content for this listing page:

- `frontend/src/i18n/servicesContent.ts`

### Add a Card on the Services Page

To add a new card to the `/services` grid:

1. Open `frontend/src/i18n/servicesContent.ts`.
2. Find `servicesContent.en.specializations.services`.
3. Add a new object with:

```ts
{
  title: 'New Service Title',
  description: 'Short service description.',
  image: '/images/services/new-service.jpg',
  badge: 'Badge',
  cta: 'Request Equipment',
}
```

4. If Arabic is used, add the matching object in `servicesContent.ar.specializations.services`.
5. Add the image file under `frontend/public/images/services/`.

The card UI is controlled by:

- `frontend/src/components/services/ServiceCard.tsx`

The grid layout is controlled by:

- `frontend/src/components/services/ServicesSpecializations.tsx`

Audit note: several service card images reference `/images/services/*.jpg`, but `frontend/public/images/services/` does not appear in the current file list. Add those images or update the paths, otherwise cards can show broken images.

### Service Detail Pages

URL pattern:

- `/services/[slug]`

Route file:

- `frontend/app/(marketing)/services/[slug]/page.tsx`

Content source:

- `frontend/src/content/services.ts`

To add a new SEO service detail page:

1. Open `frontend/src/content/services.ts`.
2. Add a new object to the `services` array.
3. Required important fields:

```ts
{
  slug: 'new-service-slug',
  title: 'New Service Title',
  metaTitle: 'SEO browser title',
  metaDescription: 'SEO meta description.',
  image: '/images/your-image.jpg',
  excerpt: 'Intro text shown under H1.',
  badge: 'Badge',
  cta: 'CTA label',
  relatedEquipment: ['Exact Equipment Name'],
  content: [
    { heading: 'Section heading', body: 'Section body.' },
  ],
}
```

4. The page becomes available automatically at `/services/new-service-slug` because `generateStaticParams()` maps over the `services` array.
5. It is also automatically included in `sitemap.ts`.

Important: `relatedEquipment` matches equipment by `item.name`, not by slug. The names must exactly match entries in `frontend/src/content/equipment.ts`.

### Modify Service Detail Layout

Edit:

- `frontend/app/(marketing)/services/[slug]/page.tsx`

This file controls:

- breadcrumb links
- H1, badge, excerpt
- hero image
- content cards from `service.content`
- related equipment pills
- service JSON-LD and breadcrumb JSON-LD

## Equipment Pages

### Equipment Listing Page

URL:

- `/equipment`

Route file:

- `frontend/app/(marketing)/equipment/page.tsx`

Main view:

- `frontend/src/views/EquipmentListPage.tsx`

Static data source passed into the page:

- `frontend/src/content/equipment.ts`

This is the page responsible for the equipment list. It renders:

- search toolbar
- filter tags
- filter sidebar/mobile panel
- result count
- empty state
- grid/list view
- pagination

Important components:

```text
frontend/src/components/equipment/EquipmentToolbar.tsx
frontend/src/components/equipment/EquipmentSearchBar.tsx
frontend/src/components/equipment/EquipmentViewToggle.tsx
frontend/src/components/equipment/EquipmentFilterPanel.tsx
frontend/src/components/equipment/EquipmentFilterTags.tsx
frontend/src/components/equipment/EquipmentResultsHeader.tsx
frontend/src/components/equipment/EquipmentGrid.tsx
frontend/src/components/equipment/EquipmentCard.tsx
frontend/src/components/equipment/EquipmentList.tsx
frontend/src/components/equipment/EquipmentListItem.tsx
frontend/src/components/equipment/EquipmentEmptyState.tsx
```

Filter state and logic:

- `frontend/src/hooks/useEquipmentFilters.ts`
- `frontend/src/utils/equipmentFilters.ts`

Equipment listing text:

- `frontend/src/i18n/equipmentContent.ts`

### Add Equipment to the Website Fleet

Edit:

- `frontend/src/content/equipment.ts`

Add a new object to `equipmentCatalog`.

Important fields:

```ts
{
  id: 5,
  slug: 'brand-model-machine-type',
  title: 'BRAND MODEL Machine Type',
  metaTitle: 'SEO title',
  metaDescription: 'SEO description',
  image: '/images/equipment/YOUR-IMAGE.png',
  name: 'BRAND MODEL Machine Type',
  brand: 'BRAND',
  model: 'MODEL',
  year: 2024,
  categoryId: 1,
  categorySlug: 'excavators',
  operatingWeight: 30,
  enginePower: 200,
  condition: 'excellent',
  availability: 'available',
  dailyRate: 1800,
  weeklyRate: 10500,
  monthlyRate: 38000,
  minimumRentalDays: 3,
  location: 'Dubai',
  images: '/images/equipment/YOUR-IMAGE.png',
  description: 'Short equipment description.',
  applications: ['Excavation', 'Loading'],
  content: [
    { heading: 'Section heading', body: 'Section body.' },
  ],
}
```

Also add the image under:

- `frontend/public/images/equipment/`

The equipment list and detail pages will update automatically because both use `equipmentCatalog`.

### Add an Equipment Category

Edit:

- `frontend/src/content/equipment.ts`

Add the category to `equipmentCategories`:

```ts
{ id: 4, name: 'Wheel Loaders', slug: 'wheel-loaders' }
```

Then use the same `categoryId` and `categorySlug` in equipment items.

If you want category labels translated in the UI, also update:

- `frontend/src/i18n/equipmentContent.ts`

### Equipment Detail Pages

URL pattern:

- `/equipment/[slug]`

Route file:

- `frontend/app/(marketing)/equipment/[slug]/page.tsx`

Content source:

- `frontend/src/content/equipment.ts`

This route controls:

- equipment H1/title
- image
- location/weight/power/minimum rental specs
- content sections from `item.content`
- applications list
- related equipment by same `categoryId`
- product JSON-LD and breadcrumb JSON-LD

Audit note: there is also an older client/API-based view at `frontend/src/views/EquipmentDetailPage.tsx`. It is not the active route for `/equipment/[slug]` in the current Next app. Prefer editing `frontend/app/(marketing)/equipment/[slug]/page.tsx` for the public equipment detail page.

## Home Page

URL:

- `/`

Route:

- `frontend/app/(marketing)/page.tsx`

View:

- `frontend/src/views/HomePage.tsx`

Home page sections live in:

- `frontend/src/components/landing/LandingPage.tsx`
- `frontend/src/components/landing/HeroSection.tsx`
- `frontend/src/components/landing/OperationalReachSection.tsx`
- `frontend/src/components/landing/SpecializedServicesSection.tsx`
- `frontend/src/components/landing/DeliveryMapSection.tsx`
- `frontend/src/components/landing/FaqSection.tsx`

Home page text/content:

- `frontend/src/i18n/landingContent.ts`

## Navigation, Footer, Language, Contact

Navbar:

- `frontend/src/components/layout/Navbar.tsx`

Footer:

- `frontend/src/components/layout/Footer.tsx`

Shared navigation/footer labels:

- `frontend/src/i18n/sharedContent.ts`

Language provider:

- `frontend/src/i18n/LanguageContext.tsx`

Language toggle:

- `frontend/src/components/common/LanguageToggle.tsx`

Floating WhatsApp button:

- `frontend/src/components/common/FloatingWhatsApp.tsx`

Contact page:

- `frontend/app/(marketing)/contact/page.tsx`

## Blog, Events, Projects, CSR

These content systems follow the same architecture: content array plus route pages.

### Blog

- Listing route: `frontend/app/(content)/blog/page.tsx`
- Detail route: `frontend/app/(content)/blog/[slug]/page.tsx`
- Content: `frontend/src/content/blog.ts`
- Card component: `frontend/src/components/content/BlogCard.tsx`

### Events

- Listing route: `frontend/app/(content)/events/page.tsx`
- Detail route: `frontend/app/(content)/events/[slug]/page.tsx`
- Content: `frontend/src/content/events.ts`
- Card component: `frontend/src/components/content/EventCard.tsx`

### Projects

- Listing route: `frontend/app/(content)/projects/page.tsx`
- Detail route: `frontend/app/(content)/projects/[slug]/page.tsx`
- Content: `frontend/src/content/projects.ts`
- Card component: `frontend/src/components/content/ProjectCard.tsx`

### CSR

- Route: `frontend/app/(marketing)/csr/page.tsx`
- Content: `frontend/src/content/csr.ts`

## Backend Architecture

The backend is a NestJS API.

Run from repository root:

- Dev: `npm run start:dev`
- Build: `npm run build`
- Tests: `npm test`

Entry point:

- `src/main.ts`

Root module:

- `src/app.module.ts`

The API enables CORS and listens on `process.env.PORT` or `3000`.

### Backend Modules

```text
src/excel/          Reads and validates Excel files
src/categories/     Category API endpoints
src/equipment/      Equipment API endpoints
src/auth/           Admin JWT login
```

### Excel Data Source

Excel files:

- `data/mysh.xlsx`
- `data/equipments.xlsx`

Loader:

- `src/excel/excel.service.ts`

The loader expects:

- `mysh.xlsx` sheet named `Categories`
- `equipments.xlsx` sheet named `Equipment`

Required category columns:

- `id`
- `name`
- `slug`

Required equipment columns:

- `id`
- `name`
- `categoryId`

The loader validates duplicate IDs, missing names, invalid category IDs, and warns about equipment referencing unknown categories.

### Backend API Endpoints

Categories:

- `GET /categories`
- `GET /categories/:id`
- `GET /categories/:id/children`

Files:

- `src/categories/categories.controller.ts`
- `src/categories/categories.service.ts`

Equipment:

- `GET /equipment`
- `GET /equipment?categoryId=1`
- `GET /equipment?availability=available`
- `GET /equipment/:id`

Files:

- `src/equipment/equipment.controller.ts`
- `src/equipment/equipment.service.ts`

Auth:

- `POST /auth/login`

Files:

- `src/auth/auth.controller.ts`
- `src/auth/auth.service.ts`
- `src/auth/jwt-auth.guard.ts`

Environment variables:

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD_HASH`
- JWT secret configuration in the auth module

## Frontend API Usage

Frontend API helpers live in:

- `frontend/src/services/api.ts`

It reads:

- `NEXT_PUBLIC_API_URL`

Functions:

- `getCategories()`
- `getEquipment()`
- `getEquipmentById(id)`

Current audit note: `EquipmentListPage` has API fallback logic when no initial static data is provided, but the active route `frontend/app/(marketing)/equipment/page.tsx` passes `equipmentCatalog` and `equipmentCategories`, so it normally does not fetch from the backend. The older `EquipmentDetailPage.tsx` also uses API-style data but is not the active slug route.

## Images and Assets

Public assets live in:

- `frontend/public/`

Equipment images:

- `frontend/public/images/equipment/`

Main hero/service images currently referenced:

- `/images/hero-equipment.jpg`
- `/images/mysh-fleet-rental-service.png`
- `/images/mysh-fleet-rental-blog.png`
- `/images/equipment/*.png`

When code references `/images/example.png`, the physical file should be:

- `frontend/public/images/example.png`

## Styling

Global styles:

- `frontend/app/globals.css`

Components mostly use Tailwind utility classes directly in JSX.

Common brand colors used throughout:

- dark navy: `#1B263B`
- muted text: `#5C677D`
- yellow accent: `#F4D03F`
- light background: `#F8F9FA`
- border gray: `#C2C7C9`

## Important Audit Notes

- The active frontend is Next.js, but there are leftover Vite files such as `frontend/src/main.tsx`, `frontend/src/App.tsx`, `frontend/vite.config.ts`, and `frontend/index.html`. They do not appear to drive the current public Next app.
- Some files contain mojibake/encoding issues, especially Arabic text in `frontend/src/i18n/servicesContent.ts` and symbols in `ServiceCard.tsx` / equipment cards. If Arabic support matters, re-save those files as UTF-8 and replace the corrupted strings.
- The services listing cards reference missing service images under `/images/services/*.jpg`. Add these assets or update the image paths.
- The equipment website catalog is duplicated conceptually: static catalog in `frontend/src/content/equipment.ts` and Excel/API data in `data/equipments.xlsx`. Decide which source should be canonical before adding admin/editing features.
- `frontend/src/components/services/ServiceCard.tsx` accepts an optional `href`, but `ServicesSpecializations.tsx` does not pass it. Current service cards link to `/contact`, not to service detail pages. To link cards to service detail pages, add a `slug` or `href` field to `ServiceCardContent` and pass it through.
- Git status could not be checked during this audit because Git marked the repository as dubious ownership for the current user. The suggested Git fix is `git config --global --add safe.directory C:/Users/mahmo/mysh/MYSH`.

## Quick Modification Recipes

### Change Global SEO Site Name or Domain

Edit:

- `frontend/src/lib/seo.ts`

Update:

- `siteConfig.name`
- `siteConfig.shortName`
- `siteConfig.url`
- `siteConfig.description`

### Change SEO for `/services`

Edit:

- `frontend/app/(marketing)/services/page.tsx`

Update the object passed to `buildMetadata`.

### Change SEO for One Service Detail Page

Edit:

- `frontend/src/content/services.ts`

Update that service item:

- `metaTitle`
- `metaDescription`
- `image`
- `title`
- `excerpt`
- `content`

### Add a New Service Card to `/services`

Edit:

- `frontend/src/i18n/servicesContent.ts`

Add to:

- `servicesContent.en.specializations.services`
- optionally `servicesContent.ar.specializations.services`

Card rendering:

- `frontend/src/components/services/ServiceCard.tsx`

### Add a New Service Detail Page

Edit:

- `frontend/src/content/services.ts`

Add a new item to `services`.

Route is created automatically:

- `/services/your-slug`

### Add New Equipment to Fleet

Edit:

- `frontend/src/content/equipment.ts`

Add item to:

- `equipmentCatalog`

Add image under:

- `frontend/public/images/equipment/`

### Change Equipment List Layout

Edit:

- `frontend/src/views/EquipmentListPage.tsx`

Then adjust child components as needed:

- grid card: `frontend/src/components/equipment/EquipmentCard.tsx`
- list row: `frontend/src/components/equipment/EquipmentListItem.tsx`
- filters: `frontend/src/components/equipment/EquipmentFilterPanel.tsx`

### Change Equipment Filtering Logic

Edit:

- `frontend/src/hooks/useEquipmentFilters.ts`
- `frontend/src/utils/equipmentFilters.ts`

### Change Equipment Detail Layout

Edit:

- `frontend/app/(marketing)/equipment/[slug]/page.tsx`

### Change Navbar Links

Edit:

- `frontend/src/components/layout/Navbar.tsx`

Labels come from:

- `frontend/src/i18n/sharedContent.ts`

### Change Footer

Edit:

- `frontend/src/components/layout/Footer.tsx`

Labels/content usually come from:

- `frontend/src/i18n/sharedContent.ts`

### Change Backend Equipment API Data

Edit the Excel file:

- `data/equipments.xlsx`

Backend reader:

- `src/excel/excel.service.ts`

API logic:

- `src/equipment/equipment.service.ts`

### Change Backend Category API Data

Edit:

- `data/mysh.xlsx`

Backend reader:

- `src/excel/excel.service.ts`

API logic:

- `src/categories/categories.service.ts`
