import { CommonData } from "./common.data";
import { CommonElements } from "./common.elements";

export class CommonMethods {
    static navigateToDemoBlazeApp(){
        cy.clearCookies();
        cy.visit(CommonData.url);
    }

    static clickHomeLink(){
        CommonElements.topMenu.homeLink.click();
    }

    static clickContactLink(){
        CommonElements.topMenu.contactLink.click();
    }

    static clickAuboutUsLink() {
        CommonElements.topMenu.aboutUsLink.click();
    }
    static clickCartLink() {
        CommonElements.topMenu.clickCart.click();
    }

    static clickLogInLink() {
        CommonElements.topMenu.logInLink.click();
    }

    static clickLogOutLink() {
        CommonElements.topMenu.logOutLink.click();
    }

    static clickSignUpLink() {
        CommonElements.topMenu.signUpLink.click();
    }

    static verifyAlert (message) {
        cy.on('window:alert', (str) =>{
            expect(str).to.equal(message)
        })
    }

    static generateRandomString(length = 10) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    static checkSignUserCorrect(username) {
        CommonElements.signUser.and('have.text', `Welcome ${username}`);
    }




}