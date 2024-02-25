import { Locator, Page, expect } from "@playwright/test";

export class MyAccountPage {
    readonly myAccountHeader: Locator;

    constructor (private page: Page) {
        this.page = page;
        this.myAccountHeader = page.getByTestId("page-title-wrapper");
    }

    async shouldDisplayHeader(): Promise<void> {
        await expect(this.myAccountHeader).toBeVisible();
    }
}