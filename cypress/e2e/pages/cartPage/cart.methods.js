import { CartElements } from "./cart.elements";

export class CartMethods {
    static clickOnDeleteLint (nameProduct) {
        CartElements.links.delete(nameProduct).click();
    }

    static verifyProductAdd (nameProduct) {
        CartElements.links.title(nameProduct).and('be.visible');
    }
}