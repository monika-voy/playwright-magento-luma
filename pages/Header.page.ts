import { expect, Locator, Page } from '@playwright/test'
type TopLevelCategory = "What's New" | "Women" | "Men" | "Gear" | "Training" | "Sale"

export class Header {
    readonly createAccountLink: Locator;
    readonly menuItem: Locator;
    readonly menuItem2: Locator;

    constructor(private page: Page) {
        this.page = page;
        this.createAccountLink =  page.getByRole('link', { name: 'Create an Account' });
        this.menuItem = page.getByRole("menuitem");
        this.menuItem2 = page.getByRole("menu")
    }

    async clickCreateAccount() {
        await this.createAccountLink.click()
    }
}