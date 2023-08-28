import { ProductsDetailsElements } from "./productDetails.elements";

export class ProductsDetailsMethods {
    static clickOnAddButton () {
        ProductsDetailsElements.buttons.addToCart.click();
    }
}