import  { Page } from  '@playwright/test';
import  { HomePage } from './HomePage'

export class App {

    readonly page: Page

    constructor(page:Page){

        this.page = page
    }

    public get HomePage(): HomePage {

        return new HomePage(this.page)
    }
}