import { test, expect } from '@playwright/test';

// 'test.describe' groups related tests together under one label.
// Think of it like a folder — all tests inside are about the same feature.
test.describe('Portfolio Site', () => {

  // 'test.beforeEach' runs before every single test in this group.
  // Here we navigate to the site so each test starts on a fresh page load.
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ─── Header ─────────────────────────────────────────────────────────────────

  test('header displays site title', async ({ page }) => {
    await expect(page.getByText('All Projects')).toBeVisible();
  });

  test('header GitHub link points to correct URL', async ({ page }) => {
    // There are two GitHub links on the page (header + hero).
    // .first() grabs the first one in the DOM, which is the header link.
    const headerGitHubLink = page.getByRole('link', { name: /github/i }).first();
    await expect(headerGitHubLink).toHaveAttribute('href', 'https://github.com/Arsidee');
  });

  // ─── Projects Section ────────────────────────────────────────────────────────

  test('renders project cards on the page', async ({ page }) => {
    // locator() uses CSS selectors — MUI renders Chip components as a <div>
    // with the class MuiChip-root. This finds all category chips on the page.
    const chips = page.locator('.MuiChip-root');

    // toHaveCount with a minimum check: we expect at least 24 projects.
    // 'toBeGreaterThanOrEqual' isn't a Playwright matcher, so we count manually.
    const count = await chips.count();
    expect(count).toBeGreaterThanOrEqual(24);
  });

  test('Tax Docs Portal card is present', async ({ page }) => {
    // Verifies a specific known project appears on the page.
    await expect(page.getByText('Tax Docs Portal')).toBeVisible();
  });

  test('Tax Docs Portal repo link points to your GitHub', async ({ page }) => {
    // We find the "Code" button that's a sibling of the Tax Docs Portal title.
    // .locator() chained after a parent element narrows the search to inside that card.
    const card = page.locator('.MuiCard-root').filter({ hasText: 'Tax Docs Portal' });
    const codeLink = card.getByRole('link', { name: /code/i });
    await expect(codeLink).toHaveAttribute('href', 'https://github.com/Arsidee/Tax-Docs-Portal');
  });

  test('Logistics Shipement Tracker Live URL link points to your GitHub', async ({ page }) => {
    const card = page.locator('.MuiCard-root').filter({ hasText: 'Logistics Shipment Tracker' });
    const codeLink = card.getByRole('link', { name: /demo/i });
    await expect(codeLink).toHaveAttribute('href', 'https://arsidee.github.io/Logistics-Shipment-Tracker/');
  });

  test('project cards show correct category chips', async ({ page }) => {
    // Checks that all three category types are represented on the page.
    await expect(page.getByText('Full Stack').first()).toBeVisible();
    await expect(page.getByText('Frontend').first()).toBeVisible();
    await expect(page.getByText('Personal').first()).toBeVisible();
  });

  test('footer displays site build', async({page}) => {
    await expect(page.getByText('Ryan Dilley. Built with React & Material UI.')).toBeVisible();
  });

});
