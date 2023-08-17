export class LoginElements {
    static get textBoxs () {
        return {
            get username() {
                return cy.get('input#loginusername');
            },

            get passeord () {
                return cy.get('input#loginpassword');
            }
        }
    }

    static get buttonBox () {
        return {
            get buttonClose() {
                return cy.get('div[id="logInModal"] button').eq(1);
            },

            get buttonLogin() {
                return cy.contains('button', 'Log in');
            }
        }
    }
}