import type { Locator , Page } from  '@playwright/test';

//creating the homepage class
export class HomePage {

    readonly page: Page
    readonly homePageHeader: Locator
    readonly newUserBtn: Locator
    readonly continueBtn: Locator
    readonly enterEmailInput: Locator
    readonly submitBtn: Locator
    readonly phoneExtensionInput: Locator
    readonly phoneNumberInput: Locator
    readonly enterNameInput: Locator
    readonly enterPasswordInput: Locator
    readonly signUpSuccessMessage: Locator
    readonly signUpPageLoginBtn: Locator
    readonly loginPageHeader: Locator
    readonly returningUserBtn: Locator
    readonly fastTrackCrmHeader: Locator

    //constructing the locators
    constructor(page:Page){

        this.page = page
        this.homePageHeader = page.locator('//h1[contains(text(),"Start your full tour here!")]')
        this.newUserBtn = page.locator('//button[contains(text(),"New user")]')
        this.continueBtn = page.locator('//button[contains(text(),"I GET IT, CONTINUE")]')
        this.enterEmailInput = page.locator('//input[@placeholder="Enter Email"]')
        this.submitBtn = page.locator('//button[@type="submit"]')
        this.phoneExtensionInput = page.locator('//input[@placeholder="+46"]')
        this.phoneNumberInput = page.locator('//input[@placeholder="Phone number"]')
        this.enterNameInput = page.locator('//input[@placeholder="Enter your name"]')
        this.enterPasswordInput = page.locator('//input[@placeholder="Password"]')
        this.signUpSuccessMessage = page.locator('//h3[contains(text(),"Your registration is complete")]')
        this.signUpPageLoginBtn = page.locator('//button[contains(text(),"Login")]')
        this.loginPageHeader = page.locator('//h1[contains(text(),"Login")]')
        this.returningUserBtn = page.locator('//button[contains(text(),"Returning user")]')
        this.fastTrackCrmHeader = page.locator('//h1[contains(text(),"Fast Track CRM")]')

    }

    //navigate to home page action
    async navigateToHomePage(){

       await this.page.goto('https://demo.ft-crm.com/tour')

    }

    //generating random emails function
    async generateRandomEmail(){

      let rand = Math.random() * 99999

      rand = Math.floor(rand)

      let randomEmail = 'elbehery.muhammed+test_' + rand + '@gmail.com'

      return randomEmail

    }

    //signup action
    async register(newEmail: string, newPhoneExtension: string, newPhoneNumber: string, newName: string, newPassword: string){

      await this.newUserBtn.click()

      await this.continueBtn.click()

      await this.enterEmailInput.fill(newEmail)

      await this.submitBtn.click()

      await this.phoneExtensionInput.fill(newPhoneExtension)

      await this.phoneNumberInput.fill(newPhoneNumber)

      await this.submitBtn.click()

      await this.enterNameInput.fill(newName)

      await this.submitBtn.click()

      await this.enterPasswordInput.fill(newPassword)

      await this.submitBtn.click()

   }

   //login from signup page action
   async loginFromSignUpPage(){

      await this.signUpPageLoginBtn.click()

   }

   //login from homepage action
   async loginFromHomePage(userEmail: string){

      await this.returningUserBtn.click()

      await this.enterEmailInput.fill(userEmail)

      await this.submitBtn.click()

   }
    
}