import { test, expect } from '@playwright/test';
import { Helper } from '../page-objects/helper';
import { SpotTheBugsPage } from '../page-objects/spotTheBugsPage';

test.describe(('QA Practice - Spot the bugs @Run'), () => {
    test('Scenario 1: Register without Last Name', async ({ page }, testinfo) => {
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

        await _page.verifyErrorMandatoryFields(testinfo.title);
    })

    test('Scenario 2: Register without Email addess', async ({ page }, testinfo) => {
        // Email address text field is mandatory so registering without it should display error

        const h = new Helper(page);
        const _page = new SpotTheBugsPage(page);

        await _page.goToSpotTheBugsPage();

        //enter values on text fields
        await _page.enterValidFirstName();
        await _page.enterValidLastName();
        await _page.enterValidPhoneNumber();
        await _page.chooseCountry(await h.getLinkOnCSV(11, "Value"));
        await _page.enterValidPassword();
        await _page.clickButtonRegister();

        await _page.verifyErrorMandatoryFields(testinfo.title);
    })

    test('Scenario 3: Verify password field type', async ({ page }, testinfo) => {
        // Password text field values should be masked

        const h = new Helper(page);
        const _page = new SpotTheBugsPage(page);

        await _page.goToSpotTheBugsPage();
        await _page.verifyPasswordFieldType(testinfo.title);
    })

    test('Scenario 4: Verify UI text spelling', async ({ page }, testinfo) => {
        // Incorrect spelling: Phone nunber* and Psw length validation

        const h = new Helper(page);
        const _page = new SpotTheBugsPage(page);

        await _page.goToSpotTheBugsPage();
        await _page.verifyPhoneNumberTextIsVisible(testinfo.title);
        await _page.verifyPasswordNoteIsVisible(testinfo.title);
    })

    test('Scenario 5: Verify invalid email address error', async ({ page }, testinfo) => {
        // Invalid email address should NOT successfully register

        const h = new Helper(page);
        const _page = new SpotTheBugsPage(page);

        await _page.goToSpotTheBugsPage();
        
        await _page.enterValidFirstName();
        await _page.enterValidLastName();
        await _page.enterValidPhoneNumber();
        await _page.chooseCountry(await h.getLinkOnCSV(11, "Value"));
        await _page.enterInvalidEmailAddress();
        await _page.enterValidPassword();
        await _page.clickButtonRegister();

        await _page.verifyInvalidEmailAddressError(testinfo.title);
    })

})