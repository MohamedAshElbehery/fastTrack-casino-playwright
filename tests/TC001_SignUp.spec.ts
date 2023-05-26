import { test, expect } from '@playwright/test';
import { App } from '../pages/App';
import { HomePage } from '../pages/HomePage';

test('Should be able to sign up', async ({ page }) => {
  
    const app = new App(page)

    const newEmail = await app.HomePage.generateRandomEmail()

    const newPhoneExtension = "+20"

    const newPhoneNumber = "1067779827"

    const newName = "Test Account"

    const newPassword = "Nopassword@123"

    await app.HomePage.navigateToHomePage()

    await expect(app.HomePage.homePageHeader).toBeVisible()

    await app.HomePage.register(newEmail, newPhoneExtension, newPhoneNumber, newName, newPassword)

    await expect(app.HomePage.signUpSuccessMessage).toBeVisible()

    await app.HomePage.loginFromSignUpPage()

    await expect(app.HomePage.loginPageHeader).toBeVisible()

    await app.HomePage.navigateToHomePage()

    await app.HomePage.loginFromHomePage(newEmail)

    await expect(app.HomePage.fastTrackCrmHeader).toBeVisible

});

