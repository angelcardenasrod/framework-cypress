export class CommonElements {
    static get topMenu () {
        return {
            get homeLink() {
                return cy.xpath('//*[@id="navbarExample"]//a[text()="Home "]')
            },

            get contactLink() {
                return cy.xpath('//*[@id="navbarExample"]//a[text()="Contact"]')
            },

            get aboutUsLink() {
                return cy.xpath('//*[@id="navbarExample"]//a[text()="About us"]')
            },

            get aboutUsLink() {
                return cy.xpath('//*[@id="navbarExample"]//a[text()="Cart"]')
            },

            get logInLink() {
                return cy.xpath('//*[@id="navbarExample"]//a[text()="Log in"]')
            },

            get logOutLink() {
                return cy.xpath('//*[@id="navbarExample"]//a[text()="Log out"]')
            },

            get signUpLink() {
                return cy.xpath('//*[@id="navbarExample"]//a[text()="Sign up"]')
            },
        }
    }
}