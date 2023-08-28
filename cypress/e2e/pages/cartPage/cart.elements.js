export class CartElements {
    static get buttons () {
        return {
            get placeOrder () {
                cy.get('button[data-toggle="modal"]')
            }
        }
    }
    /**
     * xpath: //td[text()=""]/ancestor::tr//a
     */
    static get links () {
        return {
            delete (nameProduct) {
                return cy.xpath('//td[text()="'+nameProduct+'"]/ancestor::tr//a');
            }
        }
    }
}