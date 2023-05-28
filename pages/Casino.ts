import type { Locator , Page } from  '@playwright/test';

export class Casino {

    readonly page: Page
    readonly navPanel: Locator
    readonly busyCatImg: Locator
    readonly casinoOption: Locator
    readonly gameIframe: Locator
    readonly gameBalance: Locator
    readonly nonBusyCatImg: Locator

    constructor(page:Page){

        this.page = page
        this.navPanel = page.locator('//div[@id="navigation"]')
        this.busyCatImg = page.frameLocator('//iframe[@id="game"]').locator('//img[@src="/_nuxt/img/cat1.9386b22.png"]')
        this.casinoOption = page.locator('//a[contains(text(),"Casino")]')
        this.gameBalance = page.locator('//button[@class="button money"]')
        this.nonBusyCatImg = page.frameLocator('//iframe[@id="game"]').locator('//img[@src="/_nuxt/img/cat2.248e071.png"]')

    }

    async openCasinoPage(){

        await this.navPanel.click()

        await this.casinoOption.click()
   
       }

    async chooseWinningOption(){

        await this.busyCatImg.click()

    }


}