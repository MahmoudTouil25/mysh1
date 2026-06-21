# MYSH — Project Documentation

## Stack

| Tech           | Role                                  |
| -------------- | ------------------------------------- |
| NestJS v11     | Backend framework                     |
| TypeScript     | Language                              |
| xlsx (SheetJS) | Read data from Excel file             |
| @nestjs/jwt    | JWT token generation and verification |
| @nestjs/config | Environment variable management       |
| bcrypt         | Admin password hashing                |

No database, no ORM. Categories live in `data/mysh.xlsx` and equipment lives in `data/equipments.xlsx`.

---

## Setup & Run

```bash
npm install
npm run generate-hash <your-password>   # generate bcrypt hash for admin password (run once)
# create .env based on .env.example and paste the hash
npm run init                            # generate data/mysh.xlsx (run once)
npm run start:dev                       # development (watch mode)
npm run start:prod                      # production
npm run build                           # compile only
```

API runs on `http://localhost:3000`

---

## Environment Variables (`.env`)

Copy `.env.example` and fill in:

```
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=   # output of: npm run generate-hash <your-password>
JWT_SECRET=            # long random string
JWT_EXPIRES_IN=24h
```

`.env` is gitignored — never commit it.

---

## Project Structure

```
data/
├── mysh.xlsx                            # Categories workbook
└── equipments.xlsx                      # Equipment inventory workbook

scripts/
├── init-excel.ts                        # Generates mysh.xlsx with categories pre-filled (run once)
└── generate-hash.ts                     # Hashes a password for use in .env (run once)

src/
├── main.ts                              # Bootstrap — CORS, port
├── app.module.ts                        # Root module — ConfigModule (global), ExcelModule, Auth, Categories, Equipment
├── app.controller.ts                    # POST /reload (protected) — triggers Excel reload without restart
│
├── auth/
│   ├── auth.service.ts                  # Validates credentials against .env, signs and returns JWT
│   ├── auth.controller.ts               # POST /auth/login
│   ├── auth.module.ts                   # Wires AuthService, JwtModule (async config), exports JwtAuthGuard
│   └── jwt-auth.guard.ts                # Guard — extracts and verifies Bearer token on protected routes
│
├── excel/
│   ├── excel.service.ts                 # Reads both workbooks, validates and caches their data
│   └── excel.module.ts                  # Global module — ExcelService available everywhere
│
├── categories/
│   ├── categories.service.ts            # Filters categories from ExcelService cache
│   ├── categories.controller.ts         # HTTP routes for /categories
│   └── categories.module.ts             # Wires service + controller
│
└── equipment/
    ├── equipment.service.ts             # Filters equipment from ExcelService cache
    ├── equipment.controller.ts          # HTTP routes for /equipment
    └── equipment.module.ts              # Wires service + controller
```

---

## How It Works

### Data flow

```
mysh.xlsx / Categories ─────┐
                            ├─→ ExcelService (startup or POST /reload)
equipments.xlsx / Equipment ┘
                            ↓
CategoriesService / EquipmentService (filter cached data)
   ↓
Controllers (serve via HTTP)
```

### Auth flow

```
POST /auth/login  { username, password }
   ↓
AuthService — compares password against bcrypt hash in .env
   ↓ (if valid)
JwtService.sign()  →  { access_token: "eyJ..." }
   ↓ (client stores token)
Protected route request with  Authorization: Bearer <token>
   ↓
JwtAuthGuard — verifies token signature and expiry
   ↓ (if valid)
Route handler executes
```

---

## Excel File Structure

Both workbooks are validated before the cache is replaced. If a reload fails, the previously loaded data remains active.

### `data/mysh.xlsx`

### Sheet: Categories

| Column      | Type   | Notes                                             |
| ----------- | ------ | ------------------------------------------------- |
| id          | number | Unique identifier                                 |
| name        | string | Display name (e.g. "Earthmoving")                 |
| slug        | string | URL-friendly key (e.g. "earthmoving")             |
| description | string | Optional                                          |
| parentId    | number | ID of parent category — leave empty for top-level |

### `data/equipments.xlsx`

This workbook must contain a sheet named `Equipment`. Other sheets, such as `Summary`, are allowed but ignored by the API.

### Sheet: Equipment

| Column            | Type   | Notes                                                     |
| ----------------- | ------ | --------------------------------------------------------- |
| id                | number | Unique identifier                                         |
| name              | string | Full display name (e.g. "CAT 320 Hydraulic Excavator")    |
| brand             | string | Manufacturer (e.g. Caterpillar, Komatsu, Volvo, Liebherr) |
| model             | string | Model reference (e.g. "320", "PC200")                     |
| year              | number | Manufacturing year                                        |
| categoryId        | number | Must match an id in the Categories sheet                  |
| operatingWeight   | number | In tons                                                   |
| enginePower       | number | In kilowatts (kW)                                         |
| condition         | string | `excellent` / `good` / `fair`                             |
| availability      | string | `available` / `on_rent` / `maintenance` / `unavailable`   |
| dailyRate         | number | Rental price per day                                      |
| weeklyRate        | number | Rental price per week                                     |
| monthlyRate       | number | Rental price per month                                    |
| minimumRentalDays | number | Minimum rental period in days                             |
| location          | string | Current location of the equipment                         |
| description       | string | Optional details                                          |
| images            | string | Comma-separated image URLs                                |

---

## Modules & Their Roles

### `app.module.ts`

Root module. Imports `ConfigModule.forRoot({ isGlobal: true })` — env vars available everywhere. Imports `ExcelModule`, `AuthModule`, `CategoriesModule`, `EquipmentModule`.

### `auth.module.ts`

Registers `JwtModule` asynchronously using `ConfigService` (reads `JWT_SECRET` and `JWT_EXPIRES_IN` from `.env`). Exports `JwtAuthGuard` so any module can apply it with `@UseGuards(JwtAuthGuard)`.

### `auth.service.ts`

- Reads `ADMIN_USERNAME` and `ADMIN_PASSWORD_HASH` from env
- Compares the incoming password with the stored bcrypt hash
- On success, signs a JWT with `{ sub: 'admin', username }` as payload
- Throws `401 Unauthorized` on invalid credentials

### `jwt-auth.guard.ts`

- Extracts the Bearer token from the `Authorization` header
- Verifies it using `JwtService.verify()` with the secret from env
- Throws `401 Unauthorized` if missing, invalid, or expired
- Attaches the decoded payload to `request.user`

### `excel.module.ts`

Decorated with `@Global()` — makes `ExcelService` injectable in every module without explicit imports.

### `excel.service.ts`

- `onModuleInit()` — loads both Excel files automatically when the app starts
- `reload()` — validates both files, then atomically updates the cache
- `getCategories()` / `getEquipment()` — return cached rows
- Requires the `Categories` and `Equipment` sheets and their required columns
- Rejects duplicate equipment IDs and invalid required equipment fields
- Logs a warning when equipment references an unknown category ID

### `categories.service.ts`

| Method                   | Description                             |
| ------------------------ | --------------------------------------- |
| `findAll()`              | Returns all categories from cache       |
| `findOne(id)`            | Finds by id or throws 404               |
| `findChildren(parentId)` | Returns subcategories of a given parent |

### `equipment.service.ts`

| Method              | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| `findAll(filters?)` | Returns equipment, supports `categoryId` and `availability` filters |
| `findOne(id)`       | Finds by id or throws 404                                           |

---

## API Endpoints

### Auth

| Method | URL           | Auth   | Description                 |
| ------ | ------------- | ------ | --------------------------- |
| POST   | `/auth/login` | Public | Login and receive JWT token |

**POST /auth/login — body:**

```json
{ "username": "admin", "password": "yourPassword" }
```

**Response:**

```json
{ "access_token": "eyJ..." }
```

---

### General

| Method | URL       | Auth     | Description                          |
| ------ | --------- | -------- | ------------------------------------ |
| POST   | `/reload` | Required | Reload Excel data without restarting |

**Header for protected routes:**

```
Authorization: Bearer <access_token>
```

---

### Categories

| Method | URL                        | Auth   | Description               |
| ------ | -------------------------- | ------ | ------------------------- |
| GET    | `/categories`              | Public | All categories            |
| GET    | `/categories/:id`          | Public | One category by id        |
| GET    | `/categories/:id/children` | Public | Subcategories of a parent |

---

### Equipment

| Method | URL              | Auth   | Description                |
| ------ | ---------------- | ------ | -------------------------- |
| GET    | `/equipment`     | Public | All equipment (filterable) |
| GET    | `/equipment/:id` | Public | One equipment by id        |

**GET /equipment — filter examples:**

```
GET /equipment?availability=available
GET /equipment?categoryId=9
GET /equipment?categoryId=9&availability=available
```

---

## Enums

These are conventions to follow when filling in the Excel sheet — not enforced by code.

### condition

| Value       | Meaning                        |
| ----------- | ------------------------------ |
| `excellent` | Like new, recently serviced    |
| `good`      | Normal wear, fully operational |
| `fair`      | Visible wear, still functional |

### availability

| Value         | Meaning                      |
| ------------- | ---------------------------- |
| `available`   | Ready to rent                |
| `on_rent`     | Currently deployed on a site |
| `maintenance` | Under service or repair      |
| `unavailable` | Not available for rental     |

---

## Category Tree (pre-filled in Excel)

```
1  Earthmoving
     9  Excavators
    10  Bulldozers
    11  Motor Graders
    12  Backhoe Loaders
    13  Scrapers

2  Lifting
    14  Tower Cranes
    15  Mobile Cranes
    16  Telehandlers
    17  Aerial Work Platforms

3  Compaction
    18  Vibratory Rollers
    19  Plate Compactors
    20  Pneumatic Rollers

4  Concrete
    21  Batching Plants
    22  Concrete Mixers
    23  Concrete Pumps
    24  Vibrators

5  Road Construction
    25  Asphalt Pavers
    26  Cold Planers
    27  Road Rollers

6  Drilling & Foundation
    28  Piling Rigs
    29  Drilling Rigs

7  Material Handling
    30  Dump Trucks
    31  Articulated Haulers
    32  Conveyor Systems

8  Plants
    33  Asphalt Plants
    34  Crushing & Screening Plants
    35  Generators
```

---

## Daily Workflow

### Updating equipment data

1. Open `data/equipments.xlsx` in Excel
2. Add or edit rows in the Equipment sheet
3. Save the file
4. `POST http://localhost:3000/reload` with Bearer token
5. API immediately serves the updated data

### Applying the guard to a new protected route

```typescript
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Post('some-admin-action')
doSomething() { ... }
```

---

## What's Next

- [x] Equipment listing & categories
- [x] Excel-based data layer
- [x] Admin authentication (JWT)
- [ ] Image upload
- [x] Frontend (React)


## Frontend Setup & Development Workflow

The project now contains a React + TypeScript frontend created with Vite.

### Required Node.js version

The frontend requires a recent Node.js version because the latest Vite version requires Node.js `20.19+` or `22.12+`.

Recommended local version:

```bash
node -v
# v22.x.x recommended
```

If Vite fails with an engine error, update Node.js before running the frontend.

---

## Project Structure

```txt
MYSH/
├── src/                  # NestJS backend source code
├── data/                 # Excel data source
├── frontend/             # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── App.tsx
│   │   └── index.css
│   ├── package.json
│   └── .env.local
├── package.json          # Backend package.json
├── tsconfig.json         # Backend TypeScript config
└── tsconfig.build.json
```

Important: the frontend is inside the same repository, but it has its own `package.json`, dependencies, and dev server.

---

## Backend TypeScript Config

Because the frontend is inside the backend repository, the backend TypeScript compiler must ignore the `frontend/` folder.

In `tsconfig.json`, make sure this exists:

```json
{
  "exclude": [
    "node_modules",
    "dist",
    "frontend",
    "frontend/**/*"
  ]
}
```

In `tsconfig.build.json`, make sure this exists:

```json
{
  "extends": "./tsconfig.json",
  "exclude": [
    "node_modules",
    "test",
    "dist",
    "**/*spec.ts",
    "frontend",
    "frontend/**/*"
  ]
}
```

Without this, NestJS will try to compile React `.tsx` files and produce JSX-related TypeScript errors.

---

## Running the Project Locally

The backend and frontend must be started in two separate terminals.

### Terminal 1 — Backend

From the project root:

```bash
cd MYSH
npm install
npm run start:dev
```

Backend URL:

```txt
http://localhost:3000
```

Useful API checks:

```txt
http://localhost:3000/categories
http://localhost:3000/equipment
```

---

### Terminal 2 — Frontend

From the frontend folder:

```bash
cd MYSH/frontend
npm install
npm run dev
```

Frontend URL:

```txt
http://localhost:5173
```

---

## Frontend Environment Variables

Create this file:

```txt
frontend/.env.local
```

Add:

```env
VITE_API_URL=http://localhost:3000
```

After creating or changing `.env.local`, restart the frontend dev server:

```bash
npm run dev
```

---

## Frontend API Service

All frontend calls to the backend should go through:

```txt
frontend/src/services/api.ts
```

Current service responsibilities:

```ts
getCategories()
getEquipment()
getEquipmentById(id)
```

When importing TypeScript types from the API service, use `import type`.

Correct:

```ts
import type { Equipment } from './services/api';
import { getEquipment } from './services/api';
```

Incorrect:

```ts
import { Equipment, getEquipment } from './services/api';
```

`Equipment` is a TypeScript type, not a runtime JavaScript export.

---

## Frontend Development Order

Recommended implementation order:

1. Equipment listing page
2. Equipment card component
3. Category filters
4. Equipment detail page
5. Quote request CTA
6. Admin login
7. Admin reload action
8. Image handling / upload flow

---

## Git Workflow

Create a dedicated frontend branch before making UI changes:

```bash
git checkout -b frontend/figma-integration
```

Commit example:

```bash
git add .
git commit -m "Add frontend setup and equipment listing"
```

Push example:

```bash
git push origin frontend/figma-integration
```

Do not commit `.env` or `.env.local` if they contain sensitive values.

---

## Common Issues

### Vite Node.js version error

Error example:

```txt
Vite requires Node.js version 20.19+ or 22.12+
```

Fix: update Node.js to version `20.19+` or `22.x LTS`.

---

### Backend compiles frontend files

Error example:

```txt
Cannot use JSX unless the '--jsx' flag is provided
```

Fix: exclude `frontend` from `tsconfig.json` and `tsconfig.build.json`.

---

### Frontend cannot read API URL

Check that this file exists:

```txt
frontend/.env.local
```

and contains:

```env
VITE_API_URL=http://localhost:3000
```

Then restart the frontend dev server.

---

### TypeScript import error for Equipment

Error example:

```txt
The requested module '/src/services/api.ts' does not provide an export named 'Equipment'
```

Fix:

```ts
import type { Equipment } from './services/api';
```

instead of:

```ts
import { Equipment } from './services/api';
```
