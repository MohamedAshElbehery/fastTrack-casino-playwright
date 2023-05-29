import { test, expect } from '@playwright/test';
import { App } from '../pages/App';

test('Should be able to win a game', async ({ page }) => {
  
    const app = new App(page)

    const userEmail = "elbehery.muhammed@gmail.com"

    await app.HomePage.navigateToHomePage()

    await app.HomePage.loginFromHomePage(userEmail)

    await app.Casino.openCasinoPage()

    //asserting that the casino page opened properly
    await expect(page).toHaveURL('https://demo.ft-crm.com/casino')

    //saving the initial balance
    const initialBalance = await app.Casino.getGameBalance()

    //clicking on the busy cat
    await app.Casino.chooseWinningOption()

    //asserting on the success message and waiting for it to be hidden
    await expect(app.Casino.winMessage).toBeVisible()

    await expect(app.Casino.winMessage).toBeHidden()

    //getting the balance after winning
    const finalBalance = await app.Casino.getGameBalance()

    //asserting that the balance increased
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

    //asserting that the balance decreased after losing
    expect(finalBalance).toBeLessThan(initialBalance)

});
