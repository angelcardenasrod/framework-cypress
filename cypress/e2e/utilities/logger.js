export class Logger {
    static stepNumber (number) {
        const txt = `Step # ${number}`
        cy.log(txt);
        cy.allure.step(txt)
    }

    static stepDescription (description) {
        const txt = `Description - ${description}`
        cy.log(txt);
        cy.allure.step(txt)
    }

    static stepVerification (verification) {
        const txt = `Verification - ${verification}`
        cy.log(txt);
        cy.allure.step(txt)
    }

    static subStep (subStep) {
        const txt = `SubStep - ${subStep}`
        cy.log(txt);
        cy.allure.step(txt)
    }

    static subVerification (verification) {
        const txt = `SubVerification - ${verification}`
        cy.log(txt);
        cy.allure.step(txt)
    }
}