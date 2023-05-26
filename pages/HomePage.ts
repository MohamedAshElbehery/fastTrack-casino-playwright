import type { Locator , Page } from  '@playwright/test';

export class HomePage {

    readonly page: Page
    readonly newUserBtn: Locator;

    constructor(page:Page){
      
        this.page = page
        this.newUserBtn = page.locator('//button[contains(text(),"New user")]')
    }

    async navigateToHomePage(){

       await this.page.goto('https://demo.ft-crm.com/tour')

    }

    async register(){

      await this.newUserBtn.click()

   }
    
}