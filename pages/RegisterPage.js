class RegisterPage {

    constructor(page) {
        this.page = page;
    }

    async register(username, password) {

        await this.page.fill('[name="customer.firstName"]', 'Snehal');
        await this.page.fill('[name="customer.lastName"]', 'Kamble');
        await this.page.fill('[name="customer.address.street"]', 'Viman Nagar');
        await this.page.fill('[name="customer.address.city"]', 'Pune');
        await this.page.fill('[name="customer.address.state"]', 'MH');
        await this.page.fill('[name="customer.address.zipCode"]', '411001');
        await this.page.fill('[name="customer.phoneNumber"]', '9999999999');
        await this.page.fill('[name="customer.ssn"]', '12345');

        await this.page.fill('[name="customer.username"]', username);
        await this.page.fill('[name="customer.password"]', password);
        await this.page.fill('[name="repeatedPassword"]', password);

        await this.page.click('input[value="Register"]');
    }
}

module.exports = RegisterPage;