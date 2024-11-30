import { test, expect } from "@playwright/test";
import StageData from "../00-data/stage-data.js";
import LogIn from '../00-screen-objects/01-login.js';

// Manual Testing
// Image profile upload

// Pending Fixes
// Removing groups
// Adding groups

test.beforeEach(async ({ page }) => {
  await LogIn.logIn(page);
});

test("my info", async ({ page }) => {
  await page.locator(".p-1").first().hover();
  await expect(page.getByText("Edit Profile")).toBeVisible();
  await expect(page.getByRole("link", { name: "Help" })).toBeVisible();
  await expect(page.getByText("Log Out")).toBeVisible();
});

test("opens edit profile", async ({ page }) => {
  await page.locator(".p-1").first().hover();
  await page.getByText("Edit Profile").click();
  await expect(page.getByText("First Name:*")).toBeVisible();
});

test("closes edit profile", async ({ page }) => {
  await page.locator(".p-1").first().hover();
  await page.getByText("Edit Profile").click();
  await expect(page.getByText("First Name:*")).toBeVisible();
  await page.locator(".cursor-pointer > .h-4").click();
  await expect(page.getByText("First Name:*")).not.toBeVisible();
});

test("edit fields and save", async ({ page }) => {
  await page.locator(".p-1").first().hover();
  await page.getByText("Edit Profile").click();
  await page.locator('input[type="text"]').first().fill(StageData.CareManagerFirstName);
  await page.locator('input[type="text"]').nth(1).fill(StageData.CareManagerLastName);
  // await page.getByRole("spinbutton").first().fill(StageData.CareManagerMobile);

  await page.mouse.wheel(0, 100);
  await page.locator("select").first().selectOption("US/Pacific");
  await page
    .locator("div")
    .filter({ hasText: /^Select RepeatEnglishEspanol$/ })
    .getByRole("combobox")
    .selectOption("English");

  await page.locator('textarea[type="textarea"]').first().fill("123 Sunny");
  await page
    .locator("div")
    .filter({ hasText: /^United StatesCanada$/ })
    .getByRole("combobox")
    .selectOption("United States");
  //state
  await page
    .locator("div:nth-child(11) > div > div:nth-child(2) > .px-2")
    .selectOption("California");
  //city
  await page.locator('input[type="text"]').nth(3).fill("Anaheim");
  //zip
  await page.getByRole("spinbutton").nth(1).fill("92806");
  // temp
  await page
    .locator("div")
    .filter({ hasText: /^Select TemperatureFahrenheit\(F\)Celsius\(C\)$/ })
    .getByRole("combobox")
    .selectOption("Fahrenheit(F)");
  // pds
  await page
    .locator("div")
    .filter({ hasText: /^Select WeightPounds\(Lbs\)Kilograms\(kg\)$/ })
    .getByRole("combobox")
    .selectOption("Pounds(Lbs)");
  // notes
  const dateEntry = new Date();
  await page.locator('textarea[type="textarea"]').nth(1).fill(`${dateEntry}`);
  // save
  await page.getByRole("button", { name: "Save" }).click();
});

test("changes email", async ({ page }) => {
  await page.locator(".p-1").first().hover();
  await page.getByText("Edit Profile").click();
  await page.getByRole('button', { name: 'Edit', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Verify' })).toBeVisible();
});

// test("adds group", async ({ page }) => {
//   await LogIn.logIn(page);
//   await page.locator(".p-1").first().hover();
//   await page.getByText("Edit Profile").click();
//   await page.mouse.wheel(0, 100);
//   await page.getByRole('button', { name: 'Edit group' }).click();
//   await expect(page.getByText('No Selected Group Available')).toBeVisible();
//   await page.getByLabel('Browser Users').click();
//   // await expect(page.getByText('Browser Users').first()).toBeVisible();
//   await page.locator('button').filter({ hasText: /^Save$/ }).click();
//   // await expect(page.getByText('Browser Users')).toBeVisible();
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.locator(".p-1").first().hover();
//   await page.getByText("Edit Profile").click();
//   await expect(page.getByText('Browser Users')).toBeVisible();
// });

// test("removes group", async ({ page }) => {
//   await LogIn.logIn(page);
//   await page.locator(".p-1").first().hover();
//   await page.getByText("Edit Profile").click();
//   await page.mouse.wheel(0, 100);
//   await page.getByRole('button', { name: 'Edit group' }).click();
//   await page.getByLabel('Browser Users').click();
//   // await expect(page.getByText('Browser Users').first()).not.toBeVisible();
//   await page.locator('button').filter({ hasText: /^Save$/ }).click();
//   await expect(page.getByText('Browser Users')).not.toBeVisible();
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.locator(".p-1").first().hover();
//   await page.getByText("Edit Profile").click();
//   await page.mouse.wheel(0, 100);
//   await expect(page.getByText('Browser Users')).not.toBeVisible();
// });
