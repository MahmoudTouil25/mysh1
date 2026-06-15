# MYSH — Project Documentation

## Stack

| Tech | Role |
|------|------|
| NestJS v11 | Backend framework |
| TypeScript | Language |
| xlsx (SheetJS) | Read data from Excel file |

No database, no ORM. Data lives entirely in `data/mysh.xlsx`.

---

## Setup & Run

```bash
npm install
npm run init          # generate data/mysh.xlsx (run once)
npm run start:dev     # development (watch mode)
npm run start:prod    # production
npm run build         # compile only
```

API runs on `http://localhost:3000`

---

## Project Structure

```
data/
└── mysh.xlsx                            # The data file — edit this directly in Excel

scripts/
└── init-excel.ts                        # Generates mysh.xlsx with categories pre-filled (run once)

src/
├── main.ts                              # Bootstrap — CORS, port
├── app.module.ts                        # Root module — imports ExcelModule, CategoriesModule, EquipmentModule
├── app.controller.ts                    # POST /reload — triggers Excel reload without restart
│
├── excel/
│   ├── excel.service.ts                 # Reads mysh.xlsx on startup, caches data, exposes reload()
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

```
mysh.xlsx
   ↓ (on startup or POST /reload)
ExcelService (loads & caches in memory)
   ↓
CategoriesService / EquipmentService (filter cached data)
   ↓
Controllers (serve via HTTP)
```

1. On startup, `ExcelService.onModuleInit()` reads `data/mysh.xlsx` and caches both sheets
2. All GET endpoints serve data from that in-memory cache (fast, no I/O per request)
3. When you update the Excel file, hit `POST /reload` — the cache refreshes instantly without restarting the server

---

## Excel File Structure (`data/mysh.xlsx`)

### Sheet: Categories

| Column | Type | Notes |
|--------|------|-------|
| id | number | Unique identifier |
| name | string | Display name (e.g. "Earthmoving") |
| slug | string | URL-friendly key (e.g. "earthmoving") |
| description | string | Optional |
| parentId | number | ID of parent category — leave empty for top-level |

### Sheet: Equipment

| Column | Type | Notes |
|--------|------|-------|
| id | number | Unique identifier |
| name | string | Full display name (e.g. "CAT 320 Hydraulic Excavator") |
| brand | string | Manufacturer (e.g. Caterpillar, Komatsu, Volvo, Liebherr) |
| model | string | Model reference (e.g. "320", "PC200") |
| year | number | Manufacturing year |
| categoryId | number | Must match an id in the Categories sheet |
| operatingWeight | number | In tons |
| enginePower | number | In kilowatts (kW) |
| condition | string | `excellent` / `good` / `fair` |
| availability | string | `available` / `on_rent` / `maintenance` / `unavailable` |
| dailyRate | number | Rental price per day |
| weeklyRate | number | Rental price per week |
| monthlyRate | number | Rental price per month |
| minimumRentalDays | number | Minimum rental period in days |
| location | string | Current location of the equipment |
| description | string | Optional details |
| images | string | Comma-separated image URLs |

---

## Modules & Their Roles

### `excel.module.ts`
Decorated with `@Global()` — makes `ExcelService` injectable in every module without explicit imports.

### `excel.service.ts`
- `onModuleInit()` — loads the Excel file automatically when the app starts
- `reload()` — re-reads the file and updates the cache
- `getCategories()` — returns cached category rows
- `getEquipment()` — returns cached equipment rows
- Logs a warning if `data/mysh.xlsx` is missing (reminder to run `npm run init`)

### `categories.service.ts`

| Method | Description |
|--------|-------------|
| `findAll()` | Returns all categories from cache |
| `findOne(id)` | Finds by id or throws 404 |
| `findChildren(parentId)` | Returns subcategories of a given parent |

### `equipment.service.ts`

| Method | Description |
|--------|-------------|
| `findAll(filters?)` | Returns equipment, supports `categoryId` and `availability` filters |
| `findOne(id)` | Finds by id or throws 404 |

---

## API Endpoints

### General

| Method | URL | Description |
|--------|-----|-------------|
| POST | `/reload` | Reload data from Excel without restarting the server |

### Categories

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/categories` | All categories |
| GET | `/categories/:id` | One category by id |
| GET | `/categories/:id/children` | Subcategories of a parent |

### Equipment

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/equipment` | All equipment (filterable) |
| GET | `/equipment/:id` | One equipment by id |

**GET /equipment — filter examples:**
```
GET /equipment?availability=available
GET /equipment?categoryId=9
GET /equipment?categoryId=9&availability=available
```

---

## Enums

These are not enforced by code — they are conventions to follow when filling in the Excel sheet.

### condition
| Value | Meaning |
|-------|---------|
| `excellent` | Like new, recently serviced |
| `good` | Normal wear, fully operational |
| `fair` | Visible wear, still functional |

### availability
| Value | Meaning |
|-------|---------|
| `available` | Ready to rent |
| `on_rent` | Currently deployed on a site |
| `maintenance` | Under service or repair |
| `unavailable` | Not available for rental |

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

1. Open `data/mysh.xlsx` in Excel
2. Add or edit rows in the Equipment sheet
3. Save the file
4. Send `POST http://localhost:3000/reload`
5. API immediately serves the updated data

---

## What's Next

- [ ] Authentication (admin vs. client)
- [ ] Image upload
- [ ] Rental requests / booking system
- [ ] Frontend (Angular)
