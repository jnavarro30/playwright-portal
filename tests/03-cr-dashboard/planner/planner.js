import { test, expect } from "@playwright/test";
import StageData from "../../00-data/stage-data.js";
import LogIn from "../../00-screen-objects/01-login.js";

// test.beforeEach(async ({ page }) => {
//   await LogIn.logIn(page);
// });

//toggle panel
//   await page.locator(".px-3").click();
// open panel
// await page.locator('.stroke-current').click();
// burger icon panel
// await page.locator('.h-6').click();

test("about independa", async ({ page }) => {
  await LogIn.logIn(page);
  await page.getByText('Carmen', { exact: true }).click();
  await page.getByRole('link', { name: 'Planner' }).click();
  // await page.getByRole('link', { name: 'Planner' }).click();
  // await page.locator('.stroke-current').click();
  // await page.getByRole("link", { name: "About Independa" }).click();
  // await expect(page.getByText("ABOUT INDEPENDA", { exact: true })).toBeVisible();
});