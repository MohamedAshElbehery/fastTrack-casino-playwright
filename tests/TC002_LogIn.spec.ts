import { test, expect } from '@playwright/test';
import { App } from '../pages/App';

test('Should be able to sign up', async ({ page }) => {
  
    const app = new App(page)

    const userEmail = "elbehery.muhammed@gmail.com"

    await app.HomePage.navigateToHomePage()

    await app.HomePage.loginFromHomePage(userEmail)

    await expect(app.HomePage.fastTrackCrmHeader).toBeVisible()

});

