import { Locator, Page, expect } from "@playwright/test";
import { Helper } from "./helper";
import exp from "constants";

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
    textPassswordNote: Locator;
    checkboxTermsAndConditions: Locator;
    textTermsAndConditions: Locator;

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
        this.textPassswordNote = page.getByText("Psw length validation: [6,20] characters");
        this.checkboxTermsAndConditions = page.locator("//input[@id='exampleCheck1']");
        this.textTermsAndConditions = page.getByText("I agree with the terms and conditions");

    }

    async goToSpotTheBugsPage() {
        await this.page.goto(await this.h.getLinkOnCSV(0, "Value"));
        await expect(this.textChallenge).toBeVisible({ timeout: 30000 });
        await expect(this.buttonRegister).toBeVisible();
    }




}