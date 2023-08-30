import { ThankYouPageElements } from "./thankyoupage.elements";

export class ThankYouPageMethods {
    static clickOnOk() {
        ThankYouPageElements.button.ok.click();
        cy.wait(2000);
    }

    static verifyCheckIconIsDisplay () {
        ThankYouPageElements.icon.checkIcon.and('be.visible');
    }
}