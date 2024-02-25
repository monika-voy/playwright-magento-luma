import { test } from '@playwright/test';
import { MainPage } from '../pages/Main.page';
import { RegistrationPage } from '../pages/Registration.page';
import { Header } from '../pages/Header.page';
import { MyAccountPage } from '../pages/MyAccount.page';
import { generateUniqueEmailAddress } from '../test-data/helpers';

test('Create account - successful', async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = new Header(page);
    const registrationPage = new RegistrationPage(page);
    const myAccountPage = new MyAccountPage(page);
    const userTestData = JSON.parse(JSON.stringify(require('../test-data/user-data.json')));
  
    await mainPage.visit();
    await header.clickCreateAccount();
    await registrationPage.fillInRegistrationForm(userTestData.firstName, userTestData.lastName, generateUniqueEmailAddress(), userTestData.password);
    await myAccountPage.shouldDisplayHeader();
  });