import { CommonMethods } from "../common/common.methods";
import { ProductsDetailsElements } from "./productDetails.elements";

export class ProductsDetailsMethods {
    static clickOnAddButton () {
        ProductsDetailsElements.buttons.addToCart.click();
        cy.wait(2000);
    }

    static verifyTitleProduct (productName) {
        ProductsDetailsElements.titles.titleProduct.and('have.text', productName);
    }

    static verifyMessageConfirmIsDisplay () {
        CommonMethods.verifyAlert('Product added.');
    }
}