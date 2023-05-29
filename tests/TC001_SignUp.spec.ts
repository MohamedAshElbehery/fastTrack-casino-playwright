import { test, expect } from '@playwright/test';
import { App } from '../pages/App';

test('Should be able to sign up', async ({ page }) => {
  
    //creating instance of App class
    const app = new App(page)

    //creating a unique email
    const newEmail = await app.HomePage.generateRandomEmail()

    //signup data
    const newPhoneExtension = "+20"

    const newPhoneNumber = "1067779827"

    const newName = "Test Account"

    const newPassword = "Nopassword@123"

    //navigating to homepage
    await app.HomePage.navigateToHomePage()

    //asserting that we got directed to the right page
    await expect(app.HomePage.homePageHeader).toBeVisible()

    //calling the register function and passing the signup data
    await app.HomePage.register(newEmail, newPhoneExtension, newPhoneNumber, newName, newPassword)

    //asserting that siqnup was successful
    await expect(app.HomePage.signUpSuccessMessage).toBeVisible()

    //clicking the login button from signup page
    await app.HomePage.loginFromSignUpPage()

    //asserting on the login header
    await expect(app.HomePage.loginPageHeader).toBeVisible()

    //navigating to homepage
    await app.HomePage.navigateToHomePage()

    //login with the newly created account
    await app.HomePage.loginFromHomePage(newEmail)

    //asserting that we got logged into the account
    await expect(app.HomePage.fastTrackCrmHeader).toBeVisible()

});

