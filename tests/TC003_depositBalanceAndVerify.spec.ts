import { test, expect } from '@playwright/test';
import { App } from '../pages/App';

test('Deposit approved amount', async ({ page }) => {
  
    const app = new App(page)

    const userEmail = "elbehery.muhammed@gmail.com"

    const depositAmount = 500

    await app.HomePage.navigateToHomePage()

    await app.HomePage.loginFromHomePage(userEmail)

    await expect(app.Account.balanceBtn).not.toHaveText("€0.00")

    const initialBalance = await app.Account.getDepositBalance()

    await app.Account.depositBalance()

    await app.Account.approveDeposit()

    await expect(app.Account.depositSuccessMessage).toBeVisible()

    await app.Account.confirmDeposit()

    await expect(app.Account.depositOkBtn).not.toBeVisible()

    const finalBalance = await app.Account.getDepositBalance()

    expect(initialBalance).toEqual(finalBalance - depositAmount)

});

test('Deposit failed amount', async ({ page }) => {
  
    const app = new App(page)

    const userEmail = "elbehery.muhammed@gmail.com"

    await app.HomePage.navigateToHomePage()

    await app.HomePage.loginFromHomePage(userEmail)

    await expect(app.Account.balanceBtn).not.toHaveText("€0.00")

    const initialBalance = await app.Account.getDepositBalance()

    await app.Account.depositBalance()

    await app.Account.failDeposit()

    await expect(app.Account.depositNotApprovedMessage).toBeVisible()

    await app.Account.exitDepositMenu()

    await expect(app.Account.tryAgainBtn).not.toBeVisible()

    const finalBalance = await app.Account.getDepositBalance()

    expect(initialBalance).toEqual(finalBalance)

});

