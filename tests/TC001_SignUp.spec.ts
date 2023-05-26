import { test, expect } from '@playwright/test';
import { App } from '../pages/App';
import { HomePage } from '../pages/HomePage';

test('Should be able to sign up', async ({ page }) => {
  
    const app = new App(page)

    await app.HomePage.navigateToHomePage()

    await app.HomePage.register()


});

