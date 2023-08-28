import { ThankYouPageElements } from "./thankyoupage.elements";

export class ThankYouPageMethods {
    static clickOnOk() {
        ThankYouPageElements.button.ok.click();
    }

    static verifyCheckIconIsDisplay () {
        ThankYouPageElements.icon.checkIcon.and('be.visible');
    }
}