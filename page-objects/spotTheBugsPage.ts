import { Locator, Page, expect } from "@playwright/test";
import { Helper } from "./helper";
import exp from "constants";

export class SpotTheBugsPage {
    readonly page: Page
    readonly h: Helper

    buttonRegister
        : Locator
    // Locator should be on all variables above

    constructor(page: Page) {
        this.page = page
        this.h = new Helper(this.page);

        this.buttonRegister = page.getByRole('button', { name: 'Register' });

    }

    async goToSpotTheBugsPage() {
        await this.page.goto(await this.h.getLinkOnCSV(0, "Value"));
        await expect(this.page.getByText('CHALLENGE - Spot the BUGS!')).toBeVisible({ timeout: 30000 });
        await expect(this.buttonRegister).toBeVisible();
    }




}