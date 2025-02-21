import { test, expect } from '@playwright/test';
import { Helper } from '../page-objects/helper';
import { SpotTheBugsPage } from '../page-objects/spotTheBugsPage';

test('Bug 1: Last name (mandatory) is filled but able to register @RunSolo', async ({ page }) => {
    const h = new Helper(page);
    const _page = new SpotTheBugsPage(page);

    await _page.goToSpotTheBugsPage();

});