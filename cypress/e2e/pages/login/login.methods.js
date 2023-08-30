/**
 * @Class LoginMethods
 * @description Class that returns the methods of our login page
 * @author angelcardenasrod | Ángel Cárdenas Rodríguez
 */

import { Logger } from "../../utilities/logger";
import { CommonMethods } from "../common/common.methods";
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
        Logger.subStep('Insert username')
        this.fillUsername(username);
        Logger.subStep('Insert password')
        this.fillPassword(pass);
        Logger.subStep('Click on log in button')
        this.clickButtonLogin();
    }

    static verifyWrongPasswordMessage() {
        CommonMethods.verifyAlert('Wrong password.');
    }
}