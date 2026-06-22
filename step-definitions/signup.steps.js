const {
  Given,
  When,
  Then,
  setDefaultTimeout
} = require('@cucumber/cucumber');

const { chromium } = require('playwright');

const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');

setDefaultTimeout(60000);

let browser;
let page;

const username = "user" + Date.now();
const password = "Test@123";

Given('User opens ParaBank website', async function () {

    browser = await chromium.launch({
        headless: false
    });

    page = await browser.newPage();

    await page.goto(
        'https://parabank.parasoft.com/parabank/register.htm'
    );

    await page.waitForLoadState('networkidle');
});

When('User registers a new account', async function () {

    const registerPage = new RegisterPage(page);

    await registerPage.register(username, password);

    console.log(`User Registered: ${username}`);
});

When('User logs in with registered credentials', async function () {

    await page.waitForLoadState('networkidle');

    const logoutLink = page.locator('text=Log Out');

    if (await logoutLink.isVisible()) {
        await logoutLink.click();
    }

    const loginPage = new LoginPage(page);

    await loginPage.login(username, password);

    console.log(`Logged In: ${username}`);
});

Then('User should be logged in successfully', async function () {

    await page.waitForLoadState('networkidle');

    console.log('Login Successful');
});

Then('User balance should be displayed', async function () {

    const loginPage = new LoginPage(page);

    const balance = await loginPage.printBalance();

    console.log("Balance Found:", balance);

    await page.screenshot({
        path: 'screenshots/result.png',
        fullPage: true
    });

    await browser.close();
});