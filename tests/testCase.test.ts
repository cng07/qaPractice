import { test, expect } from '@playwright/test';
import { Helper } from '../page-objects/helper';
import { SpotTheBugsPage } from '../page-objects/spotTheBugsPage';

test.describe(('QA Practice - Spot the bugs @Run'), () => {
    test('Bug 1: Register without Last Name', async ({ page }) => {
        // Last Name text field is mandatory so registering without it should display error

        const h = new Helper(page);
        const _page = new SpotTheBugsPage(page);

        await _page.goToSpotTheBugsPage();

        //enter values on text fields
        await _page.enterValidFirstName();
        await _page.enterValidPhoneNumber();
        await _page.chooseCountry(await h.getLinkOnCSV(11, "Value"));
        await _page.enterValidEmaildAddress();
        await _page.enterValidPassword();
        await _page.clickButtonRegister();

        await _page.verifyErrorMandatoryFields();
    })

})