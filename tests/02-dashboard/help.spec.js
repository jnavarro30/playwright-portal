import { test, expect } from '@playwright/test';
import LogIn from '../00-screen-objects/01-login.js';

test.beforeEach(async ({ page }) => {
  await LogIn.logIn(page);
});

test('help', async ({ page }) => {
    // profile image icon
    await page.locator('.p-1').first().hover();
    await page.getByRole('link', { name: 'Help' }).click();
    await expect(page.getByText('Questions & Answers')).toBeVisible();
  });

  test('question to customer support', async ({ page }) => {
    // profile image icon
    await page.locator('.p-1').first().hover();
    await page.getByRole('link', { name: 'Help' }).click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('hi')
    await page.getByRole('button', { name: 'Submit' }).click();

    // await page.getByText('Please Check All the Fields.')
    // getByText('Unable to send email')
  });

  test('empty question customer support', async ({ page }) => {
    // profile image icon
    await page.locator('.p-1').first().hover();
    await page.getByRole('link', { name: 'Help' }).click();
    await page.getByRole('textbox').click();
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByText('Please Check All the Fields.')).toBeVisible();
  });


  test('general questions', async ({ page }) => {
    await page.locator('.p-1').first().hover();
    await page.getByRole('link', { name: 'Help' }).click();
    await expect(page.locator('div').filter({ hasText: /^General Questions$/ })).toBeVisible();
  });
  
  test('alerts and remiders', async ({ page }) => {
    await page.locator('.p-1').first().hover();
    await page.getByRole('link', { name: 'Help' }).click();
    await page.getByRole('button', { name: 'Alerts and Reminders' }).click();
    await expect(page.locator('div').filter({ hasText: /^Alerts and Reminders$/ })).toBeVisible();
  });

  test('helpful links', async ({ page }) => {
    await page.locator('.p-1').first().hover();
    await page.getByRole('link', { name: 'Help' }).click();
    await page.getByRole('button', { name: 'Helpful Links' }).click();

    let newTab;
    await page.getByText('Benefits Checkup').click();
      newTab = await page.waitForEvent("popup");
    await expect(newTab).toHaveURL("https://benefitscheckup.org/");

    await page.getByText('National Alliance for').click();
      newTab = await page.waitForEvent("popup");
    await expect(newTab).toHaveURL("https://www.caregiving.org/");

    await page.getByText('Elder Care.gov').click();
      newTab = await page.waitForEvent("popup");
    await expect(newTab).toHaveURL("https://eldercare.acl.gov/Public/Index.aspx");

    await page.getByText('Long term Care Planning -').click();
      newTab = await page.waitForEvent("popup");
    await expect(newTab).toHaveURL("https://www.medicare.gov/coverage/advance-care-planning");

    await page.getByText('The Alzheimer\'s Association', { exact: true }).click();
      newTab = await page.waitForEvent("popup");
    await expect(newTab).toHaveURL("https://www.alz.org/");

    await page.getByText('The National Family Caregiver Association', { exact: true }).click();
      newTab = await page.waitForEvent("popup");
    await expect(newTab).toHaveURL("https://www.caregiver.org/");
  });