import { Page } from '@playwright/test';
import { HomePage } from './HomePage'
import { Account } from './Account'
import { Casino } from './Casino';

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

    public get Casino(): Casino {

        return new Casino(this.page)
    }
}