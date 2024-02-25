import { Page } from "@playwright/test";
import { BasePage } from "./Base.page";

export class MainPage extends BasePage {
    
    constructor (private page: Page) {
        super();
        this.page = page;
    }

    async visit() {
        await this.page.goto("/")
    }
}