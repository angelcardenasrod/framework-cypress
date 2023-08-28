/**
 * @Class LoginMethods
 * @description Class that returns the methods of our login page
 * @author angelcardenasrod | Ángel Cárdenas Rodríguez
 */

import { LoginElements } from "./login.elements";

export class LoginMethods{
    static fillUsername (username) {
        LoginElements.textBoxs.username.invoke('val', username);
    }

    //Usar invoke en vez de type para asegurar que indicamos bien los textos en los inputs.
    static fillPassword (pass) {
        LoginElements.textBoxs.passeord.invoke('val', pass);
    }

    static clickButtonLogin () {
        LoginElements.buttonBox.buttonLogin.click();
    }

    static clickButtonClose () {
        LoginElements.buttonBox.buttonClose.click();
    }

    static login (username, pass) {
        this.fillUsername(username);
        this.fillPassword(pass);
        this.clickButtonLogin();
    }
}