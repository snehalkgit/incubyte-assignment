class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async login(username, password) {

        await this.page.waitForSelector('input[name="username"]');

        await this.page.fill('input[name="username"]', username);

        await this.page.fill('input[name="password"]', password);

        await this.page.click('input[value="Log In"]');
    }

    async printBalance() {

        await this.page.waitForLoadState('networkidle');

        const balance = await this.page
            .locator('text=$')
            .first()
            .textContent();

        console.log('Account Balance:', balance);

        return balance;
    }
}

module.exports = LoginPage;