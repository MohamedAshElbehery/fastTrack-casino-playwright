import type { Locator , Page } from  '@playwright/test';

export class Account {

    readonly page: Page
    readonly balanceBtn: Locator
    readonly cardDepositBtn: Locator
    readonly depositAmountBtn: Locator
    readonly depositApprovedBtn: Locator
    readonly depositBonus: Locator
    readonly depositFailedBtn: Locator
    readonly depositFormExitBtn: Locator
    readonly depositNotApprovedMessage: Locator
    readonly depositOkBtn: Locator
    readonly depositSuccessMessage: Locator
    readonly welcomeBonus: Locator
    readonly tryAgainBtn: Locator

    constructor(page:Page){

        this.page = page
        this.balanceBtn = page.locator('//button[@class="button money"]')
        this.cardDepositBtn = page.locator('//button[contains(text(),"Card")]')
        this.depositAmountBtn = page.locator('//button[contains(text(),"€500")]')
        this.depositApprovedBtn = page.locator('//button[contains(text(),"Deposit Approved")]')
        this.depositBonus = page.locator('//select[@class="form-input"]')
        this.depositFailedBtn = page.locator('//button[contains(text(),"Deposit Failed")]')
        this.depositFormExitBtn = page.locator('//div[@class="modal__container"]//following::div[@class="modal__x"]')
        this.depositNotApprovedMessage = page.locator('//h3[contains(text(),"deposit was not approved")]')
        this.depositOkBtn = page.locator('//button[contains(text(),"OK")]')
        this.depositSuccessMessage = page.locator('//h3[contains(text(),"Your deposit was successful!")]')
        this.tryAgainBtn = page.locator('//button[contains(text(),"Try again")]')

    }

    //getting the account balance from the balance button, clean it and cast it into number
    async getDepositBalance(){

    this.balanceBtn.waitFor({state: "visible"})

    const balanceBeforeCleaning =  await this.balanceBtn.innerText()

    const balanceAfterCleaning = Number(balanceBeforeCleaning.replace(/[€]/g,""))

     return balanceAfterCleaning

    }

    //deposit balance action
    async depositBalance(){

      await this.balanceBtn.click()

      await this.cardDepositBtn.click()

      await this.depositAmountBtn.click()

    }

    //approve deposit action
    async approveDeposit(){

        await this.depositApprovedBtn.click()

    }

    //confirm a deposit action
    async confirmDeposit(){

        await this.depositOkBtn.click()

    }

    //fail a deposit action
    async failDeposit(){

        await this.depositFailedBtn.click()

    }

    //exit the deposit menu action
    async exitDepositMenu(){

        await this.depositFormExitBtn.click()

    }
}