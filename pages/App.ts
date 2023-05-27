import { Page } from '@playwright/test';
import { HomePage } from './HomePage'
import { Account } from './Account'

export class App {

    readonly page: Page

    constructor(page:Page){

        this.page = page
    }

    public get HomePage(): HomePage {

        return new HomePage(this.page)
    }

    public get Account(): Account {

        return new Account(this.page)
    }
}