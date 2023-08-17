import { LoginElements } from "./login.elements";

export class LoginMethods{
    static fillUsername (username) {
        LoginElements.textBoxs.username.type(username);
    }

    static fillPassword (pass) {
        LoginElements.textBoxs.passeord.type(pass);
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