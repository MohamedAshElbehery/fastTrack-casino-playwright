import { test, expect } from '@playwright/test';
import { App } from '../pages/App';

test('Should be able to win a game', async ({ page }) => {
  
    const app = new App(page)

    const userEmail = "elbehery.muhammed@gmail.com"

    await app.HomePage.navigateToHomePage()

    await app.HomePage.loginFromHomePage(userEmail)

    await expect(app.Account.balanceBtn).not.toHaveText('€0.00')

    const initialBalance = await app.Account.getDepositBalance()

    await app.Casino.openCasinoPage()

    await expect(page).toHaveURL('https://demo.ft-crm.com/casino')

    await app.Casino.chooseWinningOption()

    await app.HomePage.navigateToHomePage()

    const finalBalance = await app.Account.getDepositBalance()

    expect(finalBalance).toBeGreaterThan(initialBalance)

});

