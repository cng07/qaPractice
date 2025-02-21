import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/bugs-form');
  await page.locator('#countries_dropdown_menu').selectOption('Phillipines');
  await page.getByRole('button', { name: 'Register' }).click();
});