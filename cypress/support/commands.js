// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/**
 * @description Command to verify that the message passed by parameter is the same as the one displayed in the alert
 * @param message
 * @returns assertions if the message is correct
 * @author angelcardenasrod | Ángel Cárdenas Rodríguez
 */
Cypress.Commands.add('verifyMessageAlert', (message) =>{
    //Como verificar las alertas o mensajes pomps en Cypress
    cy.on('window:alert', (str) =>{
        expect(str).to.equal(message)
    })
})