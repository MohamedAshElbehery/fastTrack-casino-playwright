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

    async getDepositBalance(){

    this.balanceBtn.waitFor({state: "visible"})

    const balanceBeforeCleaning =  await this.balanceBtn.innerText()

    const balanceAfterCleaning = Number(balanceBeforeCleaning.replace(/[€]/g,""))

     return balanceAfterCleaning

    }

    async depositBalance(){

      await this.balanceBtn.click()

      await this.cardDepositBtn.click()

      await this.depositAmountBtn.click()

    }

    async approveDeposit(){

        await this.depositApprovedBtn.click()

    }

    async confirmDeposit(){

        await this.depositOkBtn.click()

    }

    async failDeposit(){

        await this.depositFailedBtn.click()

    }

    async exitDepositMenu(){

        await this.depositFormExitBtn.click()

    }
}