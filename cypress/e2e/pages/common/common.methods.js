import { CommonData } from "./common.data";
import { CommonElements } from "./common.elements";

export class CommonMethods {
    static navigateToDemoBlazeApp(){
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


}