/**
 * Playwright screenshot capture script for Curative OS marketing site.
 *
 * Captures key CRM screens and saves them to /public/screenshots/.
 * The marketing site uses these as static product images.
 *
 * Usage:
 *   1. Install Playwright (one-time):
 *        npm install -D @playwright/test
 *        npx playwright install chromium
 *   2. Start the CRM locally (or set CRM_URL env var to a deployed instance):
 *        cd ../crm && npm run dev
 *   3. Log in once in a browser to seed an auth state file:
 *        AUTH_STATE_PATH=./scripts/.auth.json npx playwright codegen <CRM_URL>
 *        (then save storage state from devtools)
 *   4. Run this script:
 *        npx tsx scripts/capture-screenshots.ts
 *
 * Env vars:
 *   CRM_URL          — base URL of the running CRM (default: http://localhost:3001)
 *   AUTH_STATE_PATH  — path to Playwright storageState JSON (default: ./scripts/.auth.json)
 *
 * Re-run this script whenever the CRM UI changes significantly.
 */

import { chromium, Page } from '@playwright/test';
import path from 'node:path';
import fs from 'node:fs';

const CRM_URL = process.env.CRM_URL ?? 'http://localhost:3001';
const AUTH_STATE_PATH =
  process.env.AUTH_STATE_PATH ??
  path.join(__dirname, '.auth.json');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'screenshots');

const VIEWPORT = { width: 1440, height: 900 };

type Shot = {
  name: string;
  path: string;
  capture: (page: Page) => Promise<void>;
};

const shots: Shot[] = [
  {
    name: 'board-view',
    path: '/boards',
    capture: async (page) => {
      await page.waitForSelector('[data-testid="kanban-board"], .kanban-board, main', {
        timeout: 10_000,
      });
    },
  },
  {
    name: 'deal-detail',
    path: '/boards',
    capture: async (page) => {
      const firstCard = page.locator('[data-testid="deal-card"]').first();
      if (await firstCard.count()) await firstCard.click();
      await page.waitForTimeout(800);
    },
  },
  {
    name: 'kpi-dashboard',
    path: '/dashboard',
    capture: async (page) => {
      await page.waitForSelector('main', { timeout: 10_000 });
      await page.waitForTimeout(500);
    },
  },
  {
    name: 'csv-import',
    path: '/import',
    capture: async (page) => {
      await page.waitForSelector('main', { timeout: 10_000 });
    },
  },
  {
    name: 'reminders',
    path: '/reminders',
    capture: async (page) => {
      await page.waitForSelector('main', { timeout: 10_000 });
    },
  },
];

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const hasAuth = fs.existsSync(AUTH_STATE_PATH);
  if (!hasAuth) {
    console.warn(
      `[capture] No auth state at ${AUTH_STATE_PATH}. Will run unauthenticated — most pages will redirect to login.`,
    );
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
    storageState: hasAuth ? AUTH_STATE_PATH : undefined,
  });
  const page = await context.newPage();

  for (const shot of shots) {
    const url = new URL(shot.path, CRM_URL).toString();
    const outFile = path.join(OUTPUT_DIR, `${shot.name}.png`);
    console.log(`[capture] ${shot.name} → ${url}`);

    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 });
      await shot.capture(page);
      await page.screenshot({ path: outFile, fullPage: false });
      console.log(`[capture] saved ${outFile}`);
    } catch (err) {
      console.error(`[capture] FAILED ${shot.name}:`, (err as Error).message);
    }
  }

  await browser.close();
  console.log(`[capture] done. Output: ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
