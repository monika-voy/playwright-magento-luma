import { Locator, Page } from "@playwright/test";

export class RegistrationPage {
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly createAccountButton: Locator;

    constructor(private page: Page) {
        this.page = page;
        this.firstNameField =  page.locator("#firstname");
        this.lastNameField =  page.locator("[name='lastname']");
        this.emailField =  page.locator("#email_address");
        this.passwordField =  page.locator("#password");
        this.confirmPasswordField =  page.locator("#password-confirmation");
        this.createAccountButton =  page.locator("button.action.submit.primary[title='Create an Account']");
    }

    async fillInRegistrationForm(firstName: string, lastName: string, email: string, password: string): Promise<void> {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.confirmPasswordField.fill(password);
        await this.createAccountButton.click();

    }
}