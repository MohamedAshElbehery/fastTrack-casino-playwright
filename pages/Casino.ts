import type { Locator , Page } from  '@playwright/test';

export class Casino {

    readonly page: Page
    readonly navPanel: Locator
    readonly busyCatImg: Locator
    readonly casinoOption: Locator
    readonly gameIframe: Locator
    readonly gameBalance: Locator
    readonly nonBusyCatImg: Locator
    readonly winMessage: Locator
    readonly loseMessage: Locator

    constructor(page:Page){

        this.page = page
        this.navPanel = page.locator('//div[@id="navigation"]')
        this.busyCatImg = page.frameLocator('//iframe[@id="game"]').locator('//img[@src="/_nuxt/img/cat1.9386b22.png"]')
        this.casinoOption = page.locator('//a[contains(text(),"Casino")]')
        this.gameBalance = page.frameLocator('//iframe[@id="game"]').locator('//div[contains(text(),"Balance:")]')
        this.nonBusyCatImg = page.frameLocator('//iframe[@id="game"]').locator('//img[@src="/_nuxt/img/cat2.248e071.png"]')
        this.winMessage = page.frameLocator('//iframe[@id="game"]').locator('//h1[contains(text(),"Congratulations!")]')
        this.loseMessage = page.frameLocator('//iframe[@id="game"]').locator('//h1[contains(text(),"Booooh!")]')

    }

    async openCasinoPage(){

        await this.navPanel.click()

        await this.casinoOption.click()
   
       }

     async getGameBalance(){

        this.gameBalance.waitFor({state: "visible"})
    
        const balanceBeforeCleaning =  await this.gameBalance.innerText()
    
        const balanceAfterCleaning = Number(balanceBeforeCleaning.replace(/[\s:€]/g,"").replace(/Balance/gi,""))
    
         return balanceAfterCleaning
    
        }

    async chooseWinningOption(){

        await this.busyCatImg.click()

    }

    async chooseLosingOption(){

        await this.nonBusyCatImg.click()

    }


}