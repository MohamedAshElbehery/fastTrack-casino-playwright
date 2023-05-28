import { test, expect } from '@playwright/test';
import { App } from '../pages/App';

test('Should be able to win a game', async ({ page }) => {
  
    const app = new App(page)

    const userEmail = "elbehery.muhammed@gmail.com"

    await app.HomePage.navigateToHomePage()

    await app.HomePage.loginFromHomePage(userEmail)

    await app.Casino.openCasinoPage()

    await expect(page).toHaveURL('https://demo.ft-crm.com/casino')

    const initialBalance = await app.Casino.getGameBalance()

    await app.Casino.chooseWinningOption()

    await expect(app.Casino.winMessage).toBeVisible()

    await expect(app.Casino.winMessage).toBeHidden()

    const finalBalance = await app.Casino.getGameBalance()

    expect(finalBalance).toBeGreaterThan(initialBalance)

});

test('Should be able to lose a game', async ({ page }) => {
  
    const app = new App(page)

    const userEmail = "elbehery.muhammed@gmail.com"

    await app.HomePage.navigateToHomePage()

    await app.HomePage.loginFromHomePage(userEmail)

    await app.Casino.openCasinoPage()

    await expect(page).toHaveURL('https://demo.ft-crm.com/casino')

    const initialBalance = await app.Casino.getGameBalance()

    await app.Casino.chooseLosingOption()

    await expect(app.Casino.loseMessage).toBeVisible()

    await expect(app.Casino.loseMessage).toBeHidden()

    const finalBalance = await app.Casino.getGameBalance()

    expect(finalBalance).toBeLessThan(initialBalance)

});
