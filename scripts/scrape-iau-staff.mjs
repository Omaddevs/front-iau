/**
 * Usage:
 *   node scripts/scrape-iau-staff.mjs
 *
 * Then start dev server:
 *   npm run dev
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  DEPARTMENT_ORDER,
  DEPARTMENT_OVERRIDES,
  DEPARTMENT_TITLES,
} from "../src/data/departmentOverrides.js";

const SOURCE_URL = "https://iau.uz/staff-iau/";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const dataDir = path.join(rootDir, "src", "data");
const rawOutPath = path.join(dataDir, "staff.raw.json");
const departmentsOutPath = path.join(dataDir, "departments.json");

const ACADEMIC_KEYWORDS = [
  "professor",
  "associate professor",
  "senior lecturer",
  "lecturer",
  "teacher",
  "project manager",
];

const decodeEntities = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCharCode(Number.parseInt(code, 16))
    );

const cleanText = (value) =>
  decodeEntities(value.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();

function getOverride(name) {
  const override = DEPARTMENT_OVERRIDES[name];
  if (!override) return null;

  if (typeof override === "string") {
    return {
      id: override,
      title: DEPARTMENT_TITLES[override] ?? override,
    };
  }

  if (override.id && override.title) {
    return { id: override.id, title: override.title };
  }

  return null;
}

function inferDepartment(position) {
  const p = position.toLowerCase();

  if (p.includes("rector")) {
    return {
      id: "rectorate",
      title: DEPARTMENT_TITLES.rectorate,
    };
  }

  if (p.includes("dean")) {
    return {
      id: "deans",
      title: DEPARTMENT_TITLES.deans,
    };
  }

  if (p.includes("head of") || p.startsWith("head ")) {
    return {
      id: "heads",
      title: DEPARTMENT_TITLES.heads,
    };
  }

  if (ACADEMIC_KEYWORDS.some((keyword) => p.includes(keyword))) {
    return {
      id: "academic-staff",
      title: DEPARTMENT_TITLES["academic-staff"],
    };
  }

  return {
    id: "administrative-staff",
    title: DEPARTMENT_TITLES["administrative-staff"],
  };
}

function extractStaffItems(html) {
  const blockRegex =
    /<div class="uc_team_member_overlay_bottom"[\s\S]*?<!-- end Team Member Sliding Effect -->/g;
  const blocks = [...html.matchAll(blockRegex)];

  const people = [];

  for (const match of blocks) {
    const block = match[0];

    const nameMatch = block.match(
      /uc_style_uc_team_member_overlay_bottom_elementor_full_name"[^>]*>([\s\S]*?)<\/span>/
    );
    const positionMatch = block.match(
      /uc_style_uc_team_member_overlay_bottom_elementor_designation"[^>]*>([\s\S]*?)<\/span>/
    );
    const photoMatch = block.match(
      /(?:data-lazy-src|src)="(https:\/\/iau\.uz\/wp-content\/uploads\/[^"]+)"/
    );

    if (!nameMatch || !positionMatch || !photoMatch) continue;

    people.push({
      name: cleanText(nameMatch[1]),
      position: cleanText(positionMatch[1]),
      photoUrl: photoMatch[1],
    });
  }

  const deduped = [];
  const seen = new Set();

  for (const person of people) {
    const key = `${person.name}|${person.position}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(person);
  }

  return deduped;
}

function buildDepartments(staff) {
  const grouped = new Map();

  for (const person of staff) {
    const override = getOverride(person.name);
    const dept = override ?? inferDepartment(person.position);

    if (!grouped.has(dept.id)) {
      grouped.set(dept.id, {
        id: dept.id,
        title: dept.title,
        members: [],
      });
    }

    grouped.get(dept.id).members.push({
      name: person.name,
      position: person.position,
      email: "",
      photoUrl: person.photoUrl,
    });
  }

  const ordered = [...grouped.values()].sort((a, b) => {
    const aIndex = DEPARTMENT_ORDER.indexOf(a.id);
    const bIndex = DEPARTMENT_ORDER.indexOf(b.id);
    const aOrder = aIndex === -1 ? Number.POSITIVE_INFINITY : aIndex;
    const bOrder = bIndex === -1 ? Number.POSITIVE_INFINITY : bIndex;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.title.localeCompare(b.title);
  });

  for (const dept of ordered) {
    dept.members.sort((a, b) => a.name.localeCompare(b.name));
  }

  return ordered;
}

async function main() {
  const res = await fetch(SOURCE_URL, {
    headers: {
      "user-agent": "IAU-Staff-Scraper/1.0 (+local-development)",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${SOURCE_URL}: ${res.status} ${res.statusText}`);
  }

  const html = await res.text();
  const rawStaff = extractStaffItems(html);

  if (!rawStaff.length) {
    throw new Error("No staff items found. HTML structure may have changed.");
  }

  const departments = buildDepartments(rawStaff);

  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(rawOutPath, JSON.stringify(rawStaff, null, 2) + "\n", "utf8");
  await fs.writeFile(
    departmentsOutPath,
    JSON.stringify(departments, null, 2) + "\n",
    "utf8"
  );

  console.log(`Scraped ${rawStaff.length} staff items from ${SOURCE_URL}`);
  console.log(`Wrote: ${path.relative(rootDir, rawOutPath)}`);
  console.log(`Wrote: ${path.relative(rootDir, departmentsOutPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
