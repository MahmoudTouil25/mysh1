import * as XLSX from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';

const categories = [
  // Top-level
  { id: 1,  name: 'Earthmoving',         slug: 'earthmoving',          description: 'Equipment for moving soil, rock and earth',          parentId: '' },
  { id: 2,  name: 'Lifting',             slug: 'lifting',              description: 'Cranes and lifting equipment',                       parentId: '' },
  { id: 3,  name: 'Compaction',          slug: 'compaction',           description: 'Soil and asphalt compaction equipment',              parentId: '' },
  { id: 4,  name: 'Concrete',            slug: 'concrete',             description: 'Concrete production and placement equipment',        parentId: '' },
  { id: 5,  name: 'Road Construction',   slug: 'road-construction',    description: 'Asphalt paving and road maintenance equipment',      parentId: '' },
  { id: 6,  name: 'Drilling & Foundation', slug: 'drilling-foundation','description': 'Piling and drilling equipment',                   parentId: '' },
  { id: 7,  name: 'Material Handling',   slug: 'material-handling',    description: 'Trucks and conveyors for moving materials on site',  parentId: '' },
  { id: 8,  name: 'Plants',              slug: 'plants',               description: 'Stationary production plants',                      parentId: '' },

  // Earthmoving subcategories
  { id: 9,  name: 'Excavators',          slug: 'excavators',           description: '',  parentId: 1 },
  { id: 10, name: 'Bulldozers',          slug: 'bulldozers',           description: '',  parentId: 1 },
  { id: 11, name: 'Motor Graders',       slug: 'motor-graders',        description: '',  parentId: 1 },
  { id: 12, name: 'Backhoe Loaders',     slug: 'backhoe-loaders',      description: '',  parentId: 1 },
  { id: 13, name: 'Scrapers',            slug: 'scrapers',             description: '',  parentId: 1 },

  // Lifting subcategories
  { id: 14, name: 'Tower Cranes',        slug: 'tower-cranes',         description: '',  parentId: 2 },
  { id: 15, name: 'Mobile Cranes',       slug: 'mobile-cranes',        description: '',  parentId: 2 },
  { id: 16, name: 'Telehandlers',        slug: 'telehandlers',         description: '',  parentId: 2 },
  { id: 17, name: 'Aerial Work Platforms', slug: 'aerial-work-platforms', description: '', parentId: 2 },

  // Compaction subcategories
  { id: 18, name: 'Vibratory Rollers',   slug: 'vibratory-rollers',    description: '',  parentId: 3 },
  { id: 19, name: 'Plate Compactors',    slug: 'plate-compactors',     description: '',  parentId: 3 },
  { id: 20, name: 'Pneumatic Rollers',   slug: 'pneumatic-rollers',    description: '',  parentId: 3 },

  // Concrete subcategories
  { id: 21, name: 'Batching Plants',     slug: 'batching-plants',      description: '',  parentId: 4 },
  { id: 22, name: 'Concrete Mixers',     slug: 'concrete-mixers',      description: '',  parentId: 4 },
  { id: 23, name: 'Concrete Pumps',      slug: 'concrete-pumps',       description: '',  parentId: 4 },
  { id: 24, name: 'Vibrators',           slug: 'vibrators',            description: '',  parentId: 4 },

  // Road Construction subcategories
  { id: 25, name: 'Asphalt Pavers',      slug: 'asphalt-pavers',       description: '',  parentId: 5 },
  { id: 26, name: 'Cold Planers',        slug: 'cold-planers',         description: '',  parentId: 5 },
  { id: 27, name: 'Road Rollers',        slug: 'road-rollers',         description: '',  parentId: 5 },

  // Drilling & Foundation subcategories
  { id: 28, name: 'Piling Rigs',         slug: 'piling-rigs',          description: '',  parentId: 6 },
  { id: 29, name: 'Drilling Rigs',       slug: 'drilling-rigs',        description: '',  parentId: 6 },

  // Material Handling subcategories
  { id: 30, name: 'Dump Trucks',         slug: 'dump-trucks',          description: '',  parentId: 7 },
  { id: 31, name: 'Articulated Haulers', slug: 'articulated-haulers',  description: '',  parentId: 7 },
  { id: 32, name: 'Conveyor Systems',    slug: 'conveyor-systems',     description: '',  parentId: 7 },

  // Plants subcategories
  { id: 33, name: 'Asphalt Plants',      slug: 'asphalt-plants',       description: '',  parentId: 8 },
  { id: 34, name: 'Crushing & Screening Plants', slug: 'crushing-screening-plants', description: '', parentId: 8 },
  { id: 35, name: 'Generators',          slug: 'generators',           description: '',  parentId: 8 },
];

// Equipment sheet: headers only, ready to fill
const equipmentHeaders = [
  'id', 'name', 'brand', 'model', 'year', 'categoryId',
  'operatingWeight', 'enginePower', 'condition', 'availability',
  'dailyRate', 'weeklyRate', 'monthlyRate', 'minimumRentalDays',
  'location', 'description', 'images',
];

const wb = XLSX.utils.book_new();

const catSheet = XLSX.utils.json_to_sheet(categories);
XLSX.utils.book_append_sheet(wb, catSheet, 'Categories');

const eqSheet = XLSX.utils.aoa_to_sheet([equipmentHeaders]);
XLSX.utils.book_append_sheet(wb, eqSheet, 'Equipment');

const outputPath = path.join(process.cwd(), 'data', 'mysh.xlsx');
if (!fs.existsSync(path.dirname(outputPath))) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

XLSX.writeFile(wb, outputPath);
console.log(`✔ mysh.xlsx created at ${outputPath}`);
console.log(`  → ${categories.length} categories loaded`);
console.log(`  → Equipment sheet ready (headers only — fill in Excel)`);
