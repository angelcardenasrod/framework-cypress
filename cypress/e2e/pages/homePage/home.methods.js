import { HomeElements } from "./home.elements";

export class HomeMethods {
    static clickOnPhoneOption() {
        HomeElements.categoryMenu.phone.click();
    }

    static clickOnLaptoOption() {
        HomeElements.categoryMenu.laptops.click();
    }

    static clickOnMonitorsOption() {
        HomeElements.categoryMenu.monitors.click();
    }

    static productLink (nameProduct) {
        HomeElements.product(nameProduct).click();
    }

    static verifyProductIsDisplay(productName){
        HomeElements.product(productName).and('be.visible');
    }
}