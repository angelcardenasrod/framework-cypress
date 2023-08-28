import { PlaceOrderElements } from "./placeOrder.elements";

export class PlaceOrderMethods {
    static fillName (name) {
        PlaceOrderElements.textBoxes.name.invoke('val', name);
    }

    static fillCountry (country) {
        PlaceOrderElements.textBoxes.country.invoke('val', country);
    }

    static fillCity (city) {
        PlaceOrderElements.textBoxes.city.invoke('val', city);
    }

    static fillCreditCard (creditCard) {
        PlaceOrderElements.textBoxes.creditCard.invoke('val', creditCard);
    }

    static fillMonth (month) {
        PlaceOrderElements.textBoxes.month.invoke('val', month);
    }

    static fillYear (year) {
        PlaceOrderElements.textBoxes.year.invoke('val', year);
    }

    static clickOnClose () {
        PlaceOrderElements.buttons.close.click();
    }

    static clickOnPurchase () {
        PlaceOrderElements.buttons.purchase.click();
    }

    
}