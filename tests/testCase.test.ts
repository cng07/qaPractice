import { test, expect } from '@playwright/test';
import { Helper } from '../page-objects/helper';
import { SpotTheBugsPage } from '../page-objects/spotTheBugsPage';

test('Test case 1 @RunSolo', async ({ page }) => {
    test.setTimeout(60000);
    const h = new Helper(page);
    const _page = new SpotTheBugsPage(page);

    // Go to QA Practice Page
    await _page.goToSpotTheBugsPage();


});