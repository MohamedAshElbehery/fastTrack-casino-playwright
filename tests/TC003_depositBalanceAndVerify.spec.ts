import { test, expect } from '@playwright/test';
import { App } from '../pages/App';

test('Deposit approved amount', async ({ page }) => {
  
    const app = new App(page)

    const userEmail = "elbehery.muhammed@gmail.com"

    const depositAmount = 500

    await app.HomePage.navigateToHomePage()

    await app.HomePage.loginFromHomePage(userEmail)

    //waiting for the balance to load after login
    await expect(app.Account.balanceBtn).not.toHaveText("€0.00")

    //getting the initial balance
    const initialBalance = await app.Account.getDepositBalance()

    await app.Account.depositBalance()

    await app.Account.approveDeposit()

    //asserting on the success message
    await expect(app.Account.depositSuccessMessage).toBeVisible()

    await app.Account.confirmDeposit()

    //waiting for deposit button to not be visible
    await expect(app.Account.depositOkBtn).not.toBeVisible()

    const finalBalance = await app.Account.getDepositBalance()

    //asserting that the new balance is added
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

    //asserting that the balance is the same after failing the deposit
    expect(initialBalance).toEqual(finalBalance)

});

