import { CartMethods } from "./pages/cartPage/cart.methods";
import { HomeMethods } from "./pages/homePage/home.methods";

describe('template spec', () => {
  it('passes 23', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.wait(30000);
    CartMethods.clickOnDeleteLint('Nokia lumia 1520');
    cy.wait(30000);
  })
})