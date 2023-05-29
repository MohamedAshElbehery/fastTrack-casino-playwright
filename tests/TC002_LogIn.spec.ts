import { test, expect } from '@playwright/test';
import { App } from '../pages/App';

test('Should be able to login', async ({ page }) => {
  
    //creating instance of App class
    const app = new App(page)

    //login email variable
    const userEmail = "elbehery.muhammed@gmail.com"

    //navigate to home page action
    await app.HomePage.navigateToHomePage()

    //login from home page action
    await app.HomePage.loginFromHomePage(userEmail)

    //asserting that we got logged in successfully
    await expect(app.HomePage.fastTrackCrmHeader).toBeVisible()

});

