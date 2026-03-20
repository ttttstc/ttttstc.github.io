import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should load landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/泥巴猪/);
  });

  test('should navigate to cat-cafe page', async ({ page }) => {
    await page.goto('/cat-cafe');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to lobster pages', async ({ page }) => {
    await page.goto('/lobster');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to skill page', async ({ page }) => {
    await page.goto('/lobster/skill');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to tutorial page', async ({ page }) => {
    await page.goto('/lobster/tutorial');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to diary page', async ({ page }) => {
    await page.goto('/lobster/diary');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to workspace page', async ({ page }) => {
    await page.goto('/lobster/workspace');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to tech-eden page', async ({ page }) => {
    await page.goto('/lobster/tech-eden');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to prompts page', async ({ page }) => {
    await page.goto('/prompts');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should handle browser back/forward navigation', async ({ page }) => {
    await page.goto('/');
    await page.goto('/lobster/skill');
    await page.goBack();
    await expect(page).toHaveURL('/');

    await page.goForward();
    await expect(page).toHaveURL('/lobster/skill');
  });
});
