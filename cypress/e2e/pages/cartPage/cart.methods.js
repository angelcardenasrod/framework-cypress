import { CartElements } from "./cart.elements";

export class CartMethods {
    static clickOnDeleteLint (nameProduct) {
        CartElements.links.delete(nameProduct).click();
    }
}