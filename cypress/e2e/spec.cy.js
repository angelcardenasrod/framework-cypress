import { HomeMethods } from "./pages/homePage/home.methods";

describe('template spec', () => {
  it('passes 23', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    HomeMethods.productLink('Iphone 6 32gb');
    cy.wait(20000);
  })
})