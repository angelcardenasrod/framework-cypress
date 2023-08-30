export class ProductsDetailsElements {
    static get buttons () {
        return {
            get addToCart () {
                return cy.contains('a', 'Add to cart');
            }
        }
    }

    static get titles () {
        return {
            get titleProduct () {
                return cy.xpath('//*/h2[@class="name"]');
            }
        }
    }
}