import { test, expect } from '@playwright/test';
import { Helper } from '../page-objects/helper';
import { SpotTheBugsPage } from '../page-objects/spotTheBugsPage';

test('Bug 1: Register without Last Name @RunSolo', async ({ page }) => {
    const h = new Helper(page);
    const _page = new SpotTheBugsPage(page);

    await _page.goToSpotTheBugsPage();
    

    await _page.clickButtonRegister();

});