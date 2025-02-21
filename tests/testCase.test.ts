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

    test('Scenario 6: Verify invalid phone number error', async ({ page }, testinfo) => {
        // Invalid phone number should NOT successfully register

        const h = new Helper(page);
        const _page = new SpotTheBugsPage(page);

        await _page.goToSpotTheBugsPage();

        await _page.enterValidFirstName();
        await _page.enterValidLastName();
        await _page.enterInvalidPhoneNumber();
        await _page.chooseCountry(await h.getLinkOnCSV(11, "Value"));
        await _page.enterValidEmaildAddress();
        await _page.enterValidPassword();
        await _page.clickButtonRegister();

        await _page.verifyInvalidPhoneNumberError(testinfo.title);
    })

    test('Scenario 7: Verify invalid first name error', async ({ page }, testinfo) => {
        // Invalid first name should NOT successfully register

        const h = new Helper(page);
        const _page = new SpotTheBugsPage(page);

        await _page.goToSpotTheBugsPage();

        await _page.enterInvalidFirstName();
        await _page.enterValidLastName();
        await _page.enterValidPhoneNumber();
        await _page.chooseCountry(await h.getLinkOnCSV(11, "Value"));
        await _page.enterValidEmaildAddress();
        await _page.enterValidPassword();
        await _page.clickButtonRegister();

        await _page.verifyInvalidFirstNameError(testinfo.title);
    })

    test('Scenario 8: Verify invalid last name error', async ({ page }, testinfo) => {
        // Invalid first name should NOT successfully register

        const h = new Helper(page);
        const _page = new SpotTheBugsPage(page);

        await _page.goToSpotTheBugsPage();

        await _page.enterValidFirstName();
        await _page.enterInvalidLastName();
        await _page.enterValidPhoneNumber();
        await _page.chooseCountry(await h.getLinkOnCSV(11, "Value"));
        await _page.enterValidEmaildAddress();
        await _page.enterValidPassword();
        await _page.clickButtonRegister();

        await _page.verifyInvalidLastNameError(testinfo.title);
    })

    test('Scenario 9: Verify checkbox if enabled', async ({ page }, testinfo) => {
        // Terms and conditions checkbox should be enabled

        const h = new Helper(page);
        const _page = new SpotTheBugsPage(page);

        await _page.goToSpotTheBugsPage();
        await _page.verifyTermsAndConditionsCheckboxIsEnabled(testinfo.title);
    })

    test('Scenario 10: Verify terms and conditions checkbox status', async ({ page }, testinfo) => {
        // User should not be able to register if terms and conditions checkbox is not ticked

        const h = new Helper(page);
        const _page = new SpotTheBugsPage(page);

        await _page.goToSpotTheBugsPage();

        await _page.enterValidFirstName();
        await _page.enterValidLastName();
        await _page.enterValidPhoneNumber();
        await _page.chooseCountry(await h.getLinkOnCSV(11, "Value"));
        await _page.enterValidEmaildAddress();
        await _page.enterValidPassword();
        await _page.clickButtonRegister();

        await _page.verifyErrorWhenTermsAndConditionsCheckboxIsNotChecked(testinfo.title);
    })

    test('Scenario 11: Verify valid password length', async ({ page }, testinfo) => {
        // Password field should accept 6-20 characters

        const h = new Helper(page);
        const _page = new SpotTheBugsPage(page);

        await _page.goToSpotTheBugsPage();

        await _page.enterValidFirstName();
        await _page.enterValidLastName();
        await _page.enterValidPhoneNumber();
        await _page.chooseCountry(await h.getLinkOnCSV(11, "Value"));
        await _page.enterValidEmaildAddress();
        await _page.enterMaxLengthValidPassword();
        await _page.clickButtonRegister();

        await _page.verifySuccessRegistrationMessage(testinfo.title);
    })

    test('Scenario 12: Verify information displayed after valid registration', async ({ page }, testinfo) => {
        // Phone number value inputted should equal result

        const h = new Helper(page);
        const _page = new SpotTheBugsPage(page);

        await _page.goToSpotTheBugsPage();

        await _page.enterValidFirstName();
        await _page.enterValidLastName();
        await _page.enterValidPhoneNumber();
        await _page.chooseCountry(await h.getLinkOnCSV(11, "Value"));
        await _page.enterValidEmaildAddress();
        await _page.enterValidPassword();
        await _page.clickButtonRegister();

        await _page.verifySuccessRegistrationMessage(testinfo.title);

        await _page.verifyResultAfterInputtingValidValues(testinfo.title);
    })

    test('Scenario 13: Basic GET API', async ({ request, page }) => {
        const h = new Helper(page);

        const response = await request.get(await h.getLinkOnCSV(0, "Value"), {});
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    })
})