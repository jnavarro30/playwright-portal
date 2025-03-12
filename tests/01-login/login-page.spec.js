import { test, expect } from "@playwright/test";
import Login from "../00-screen-objects/01-login.js";

test("log in", async ({ page }) => {
  await Login.logIn(page);
  await expect(page).toHaveURL(/.*dashboard/);
});

test("incorrect log in", async ({ page }) => {
  await Login.incorrectLogIn(page);
  await expect(page.getByText('Incorrect code. Please enter')).toBeVisible();
});

// unable to find, icons blocking Resend Text link
// test("resend code", async ({ page }) => {
//   await page.goto("https://portal-stage.independa.com/");
//   await page.getByPlaceholder("Phone number").fill("4040404040");
//   await page.getByRole("button", { name: "Login via Text" }).click();
//   await page.getByText("Resend Text").click();
//   await expect(page.getByText("Success!")).toBeVisible();
// });

test("log out", async ({ page }) => {
  await Login.logIn(page);
  await page.locator(".p-1").first().hover();
  await page.getByText("Log Out").click();
  await expect(page).toHaveURL("https://portal-stage.independa.com/");
});

test("try another number", async ({ page }) => {
  await page.goto("https://portal-stage.independa.com/");
  await page.getByPlaceholder("Phone number").fill("4040404040");
  await page.getByRole("button", { name: "Login via Text" }).click();
  await page.getByText("Try with another number").click();
  await expect(page.getByRole("button", { name: "Login via Text" })).toBeVisible();
});

test("open facebook in a new tab", async ({ page }) => {
  await page.goto("https://portal-stage.independa.com/");
  await page.getByRole("link").first().click();
  const newTab = await page.waitForEvent("popup");
  await expect(newTab).toHaveURL("https://www.facebook.com/Independa");
});

test("open x in a new tab", async ({ page }) => {
  await page.goto("https://portal-stage.independa.com/");
  await page.getByRole("link").nth(1).click();
  const newTab = await page.waitForEvent("popup");
  await expect(newTab).toHaveURL("https://x.com/independa");
});

test("open linkedin in a new tab", async ({ page }) => {
  await page.goto("https://portal-stage.independa.com/");
  await page.getByRole("link").nth(2).click();
  const newTab = await page.waitForEvent("popup");
  await expect(newTab).toHaveURL("https://www.linkedin.com/company/independa-inc-");
});

test("open youtube in a new tab", async ({ page }) => {
  await page.goto("https://portal-stage.independa.com/");
  await page.locator("a").filter({ hasText: "Youtube-colorCreated with" }).click();
  const newTab = await page.waitForEvent("popup");
  await expect(newTab).toHaveURL("https://www.youtube.com/user/Independa4U");
});