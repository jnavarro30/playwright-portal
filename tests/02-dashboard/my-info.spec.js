import { test, expect } from '@playwright/test';
import Login from '../00-screen-objects/01-login.js';

test('my info', async ({ page }) => {
    await Login.logIn(page);
  // profile image icon
  await page.locator('.p-1').first().hover();
  await expect(page.getByText('Log Out')).toBeVisible();
});

test('help', async ({ page }) => {
    // profile image icon
    await Login.logIn(page);
    await page.locator('.p-1').first().hover();
    await page.getByRole('link', { name: 'Help' }).click();
    await expect(page.getByText('Questions & Answers')).toBeVisible();
  });
  