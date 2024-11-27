import { test, expect } from "@playwright/test";
import Login from "../00-screen-objects/01-login.js";

test("log in", async ({ page }) => {
  await Login.logIn(page);
  await expect(page).toHaveURL(/.*dashboard/);
  // await page.pause();
});
// unable to find, icons blocking Resend Text link
// test('resend code', async ({ page }) => {
//   await page.goto('https://portal-stage.independa.com/');
//   await page.getByPlaceholder('Phone number').fill('4040404040');
//   await page.getByRole('button', { name: 'Login via Text' }).click();
//   await page.getByText('Resend Text').click();
//   await expect(page.getByText("Success !")).toBeVisible();

//   // await page.getByPlaceholder('Enter Email').fill('jesse.cg@independa.com');
//   // await page.getByPlaceholder('Enter Password').fill('ind@123');
//   // await page.getByRole('button', { name: 'Login'}).click();
//   // await expect(page).toHaveURL(/.*dashboard/);
// });

test("log out", async ({ page }) => {
  await Login.logIn(page);
  await page.locator(".p-1").first().hover();
  await page.getByText("Log Out").click();
  await expect(page).toHaveURL("https://portal-stage.independa.com/");
});

  test('open facebook in a new tab', async ({ page }) => {
    await page.goto('https://portal-stage.independa.com/');
    await page.getByRole('link').first().click();
    const newTab = await page.waitForEvent("popup");
    await expect(newTab).toHaveURL('https://www.facebook.com/Independa');
  });

  test('open x in a new tab', async ({ page }) => {
    await page.goto('https://portal-stage.independa.com/');
    await page.getByRole('link').nth(1).click();
    const newTab = await page.waitForEvent("popup");
    await expect(newTab).toHaveURL('https://x.com/independa');
  });

  test('open linkedin in a new tab', async ({ page }) => {
    await page.goto('https://portal-stage.independa.com/');
    await page.getByRole('link').nth(2).click();
    const newTab = await page.waitForEvent("popup");
    await expect(newTab).toHaveURL('https://www.linkedin.com/company/independa-inc-');
  });

  test('open youtube in a new tab', async ({ page }) => {
    await page.goto('https://portal-stage.independa.com/');
    await page.locator('a').filter({ hasText: 'Youtube-colorCreated with' }).click();
    const newTab = await page.waitForEvent("popup");
    await expect(newTab).toHaveURL('https://www.youtube.com/user/Independa4U');
  });

//   test('forgot password', async ({ page }) => {
//     await page.goto('https://portal.independa.com/');
//     await page.getByText('Forgot your password').click();
//     const newTab = await page.waitForEvent("popup");
//     await expect(newTab).toHaveURL('https://www.youtube.com/user/Independa4U');
//   });
