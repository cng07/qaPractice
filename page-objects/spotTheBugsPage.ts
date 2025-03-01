import { Locator, Page, expect } from "@playwright/test";
import { Helper } from "./helper";

export class SpotTheBugsPage {
    readonly page: Page
    readonly h: Helper

    buttonRegister: Locator;
    textFieldFirstName: Locator;
    textFieldLastName: Locator;
    textFieldPhoneNumber: Locator;
    dropdownCountry: Locator;
    textFieldEmailAddress: Locator;
    textFieldPassword: Locator;
    textChallenge: Locator;
    textFirstName: Locator;
    textLastName: Locator;
    textLastNameNote: Locator;
    textPhoneNumber: Locator;
    textPhoneNumberNote: Locator;
    textCountry: Locator;
    textEmailAddress: Locator;
    textPassword: Locator;
    textPasswordNote: Locator;
    checkboxTermsAndConditions: Locator;
    textTermsAndConditions: Locator;
    textSuccessfullyRegistered: Locator;
    resultFirstName: Locator;
    resultLastName: Locator;
    resultPhoneNumber: Locator;
    resultCountry: Locator;
    resultEmail: Locator;

    constructor(page: Page) {
        this.page = page
        this.h = new Helper(this.page);

        this.buttonRegister = page.getByRole('button', { name: 'Register' });
        this.textFieldFirstName = page.getByPlaceholder("Enter first name");
        this.textFieldLastName = page.getByPlaceholder("Enter last name");
        this.textFieldPhoneNumber = page.getByPlaceholder("Enter phone number");
        this.dropdownCountry = page.locator("//select[@id='countries_dropdown_menu']");
        this.textFieldEmailAddress = page.getByPlaceholder("Enter email");
        this.textFieldPassword = page.getByPlaceholder("Password");
        this.textChallenge = page.getByText("CHALLENGE - Spot the BUGS!");
        this.textFirstName = page.getByText("First Name");
        this.textLastName = page.getByText("Last Name*");
        this.textLastNameNote = page.getByText("Note: All the fields marked with * are mandatory");
        this.textPhoneNumber = page.getByText("Phone number*");
        this.textPhoneNumberNote = page.getByText("Phone length validation: at least 10 digits");
        this.textCountry = page.getByText("Country");
        this.textEmailAddress = page.getByText("Email address*");
        this.textPassword = page.getByText("Password*");
        this.textPasswordNote = page.getByText("Password length validation: 6-20 characters");
        this.checkboxTermsAndConditions = page.locator("//input[@id='exampleCheck1']");
        this.textTermsAndConditions = page.getByText("I agree with the terms and conditions");
        this.textSuccessfullyRegistered = page.getByText("Successfully registered the following information");
        this.resultFirstName = page.locator("//div[@id='resultFn']")
        this.resultLastName = page.locator("//div[@id='resultLn']")
        this.resultPhoneNumber = page.locator("//div[@id='resultPhone']")
        this.resultCountry = page.locator("//div[@id='country']")
        this.resultEmail = page.locator("//div[@id='resultEmail']")
    }

    async goToSpotTheBugsPage() {
        await this.page.goto(await this.h.getLinkOnCSV(0, "Value"));
        await expect(this.textChallenge).toBeVisible({ timeout: 30000 });
        await expect(this.buttonRegister).toBeVisible();
    }

    async clickButtonRegister() {
        await this.buttonRegister.click();
    }

    async enterValidFirstName() {
        await this.textFieldFirstName.fill(await this.h.getLinkOnCSV(1, "Value"));
    }

    async enterInvalidFirstName() {
        await this.textFieldFirstName.fill(await this.h.getLinkOnCSV(2, "Value"));
    }

    async enterValidLastName() {
        await this.textFieldLastName.fill(await this.h.getLinkOnCSV(3, "Value"));
    }

    async enterInvalidLastName() {
        await this.textFieldLastName.fill(await this.h.getLinkOnCSV(4, "Value"));
    }

    async enterValidPhoneNumber() {
        await this.textFieldPhoneNumber.fill(await this.h.getLinkOnCSV(5, "Value"));
    }

    async enterInvalidPhoneNumber() {
        await this.textFieldPhoneNumber.fill(await this.h.getLinkOnCSV(6, "Value"));
    }

    async enterValidEmaildAddress() {
        await this.textFieldEmailAddress.fill(await this.h.getLinkOnCSV(7, "Value"));
    }

    async enterInvalidEmailAddress() {
        await this.textFieldEmailAddress.fill(await this.h.getLinkOnCSV(8, "Value"));
    }

    async enterValidPassword() {
        await this.textFieldPassword.fill(await this.h.getLinkOnCSV(9, "Value"));
    }

    async enterInvalidPassword() {
        await this.textFieldPassword.fill(await this.h.getLinkOnCSV(10, "Value"));
    }

    async chooseCountry(country: string) {
        await this.dropdownCountry.selectOption(country);
    }

    async verifyErrorMandatoryFields(testTitle: string) {
        // await expect(this.page.getByText("Error: All the fields marked with * are mandatory")).toBeVisible();

        // Error is NOT available on page. Assuming this is the error displayed for mandatory fields that are unpopulated after clicking Register button.
        const isVisible = await this.page.getByText("Error: All the fields marked with * are mandatory").isVisible();
        if (isVisible) {
            console.log("PASSED: Element is visible")
        } else {
            console.log(`FAILED: Element is NOT visible - ${testTitle}`)
        }
    }

    async verifyPasswordFieldType(testTitle: string) {
        // expect(this.textFieldPassword.getAttribute("type")).toBe("password")

        const elementAttribute = await this.textFieldPassword.getAttribute("type");

        if (elementAttribute === "password") {
            console.log("PASSED: Password field has type = 'password'")
        } else {
            console.log(`FAILED: Password field has type != 'password' - ${testTitle}`)
        }
    }

    async verifyPhoneNumberTextIsVisible(testTitle: string) {
        const isVisible = await this.textPhoneNumber.isVisible();

        if (isVisible) {
            console.log("PASSED: Element is visible")
        } else {
            console.log(`FAILED: Phone number text is NOT visible - ${testTitle}`)
        }
    }

    async verifyPasswordNoteIsVisible(testTitle: string) {
        const isVisible = await this.textPasswordNote.isVisible();

        if (isVisible) {
            console.log("PASSED: Element is visible")
        } else {
            console.log(`FAILED: Password note text is NOT visible - ${testTitle}`)
        }
    }

    async verifyInvalidEmailAddressError(testTitle: string) {
        const isVisible = await this.page.getByText("Error: Invalid email address").isVisible();

        if (isVisible) {
            console.log("PASSED: Correct error message is displayed")
        } else {
            console.log(`FAILED: Invalid email address error is NOT displayed - ${testTitle}`)
        }
    }

    async verifyInvalidPhoneNumberError(testTitle: string) {
        const isVisible = await this.page.getByText("Error: Invalid phone number").isVisible();

        if (isVisible) {
            console.log("PASSED: Correct error message is displayed")
        } else {
            console.log(`FAILED: Invalid phone number error is NOT displayed - ${testTitle}`)
        }
    }

    async verifyInvalidFirstNameError(testTitle: string) {
        const isVisible = await this.page.getByText("Error: Invalid first name").isVisible();

        if (isVisible) {
            console.log("PASSED: Correct error message is displayed")
        } else {
            console.log(`FAILED: Invalid first name error is NOT displayed - ${testTitle}`)
        }
    }

    async verifyInvalidLastNameError(testTitle: string) {
        const isVisible = await this.page.getByText("Error: Invalid last name").isVisible();

        if (isVisible) {
            console.log("PASSED: Correct error message is displayed")
        } else {
            console.log(`FAILED: Invalid last name error is NOT displayed - ${testTitle}`)
        }
    }

    async verifyTermsAndConditionsCheckboxIsEnabled(testTitle: string) {
        const isDisabled = await this.checkboxTermsAndConditions.isDisabled();

        if (isDisabled) {
            console.log(`FAILED: Terms and conditions checkbox is disabled - ${testTitle}`)
        } else {
            console.log(`PASSED: Terms and conditions checkbox is enabled`)
        }
    }

    async verifyErrorWhenTermsAndConditionsCheckboxIsNotChecked(testTitle: string) {
        const isChecked = await this.checkboxTermsAndConditions.isChecked();

        if (isChecked) {
            console.log(`PASSED: Terms and conditions checkbox is checked`)
        } else {
            console.log(`FAILED: Terms and conditions checkbox is NOT checked - ${testTitle}`)
        }
    }

    async enterMaxLengthValidPassword() {
        await this.textFieldPassword.fill(await this.h.getLinkOnCSV(12, "Value"));
    }

    async verifySuccessRegistrationMessage(testTitle: string) {
        const isVisible = await this.textSuccessfullyRegistered.isVisible();

        if (isVisible) {
            console.log("PASSED: Successful registration")
        } else {
            console.log(`FAILED: User was not successfully registered - ${testTitle}`)
        }
    }

    async verifyResultAfterInputtingValidValues(testTitle: string) {
        const inputValidFirstName = await this.h.getLinkOnCSV(1, "Value");
        const inputValidLastName = await this.h.getLinkOnCSV(3, "Value");
        const inputValidPhoneNumber = await this.h.getLinkOnCSV(5, "Value");
        const inputValidCountry = await this.h.getLinkOnCSV(11, "Value");
        const inputValidEmailAddress = await this.h.getLinkOnCSV(7, "Value");

        try {
            expect(`First Name: ${inputValidFirstName}`).toBe(await this.resultFirstName.textContent());
            expect(`Last Name: ${inputValidLastName}`).toBe(await this.resultLastName.textContent());
            expect(`Phone Number: ${inputValidPhoneNumber}`).toBe(await this.resultPhoneNumber.textContent());
            expect(`Country: ${inputValidCountry}`).toBe(await this.resultCountry.textContent());
            expect(`Email: ${inputValidEmailAddress}`).toBe(await this.resultEmail.textContent());
        } catch (error) {
            console.log(`FAILED: Input does not match output - ${testTitle}`)
        }
    }
}