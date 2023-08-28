export class ThankYouPageElements {
    static get button () {
        return {
            get ok(){
                return cy.contains('button', 'OK');
            }
        }
    }

    static get icon () {
        return {
            get checkIcon () {
                return cy.get('.sa-success')
            }
        }
    }
}