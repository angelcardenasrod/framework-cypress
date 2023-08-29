import { CommonMethods } from "../common/common.methods";
import { SignupElements } from "./singup.elements";

export class SignupMethods {
    static fillUsername (username) {
        SignupElements.textboxes.username.invoke('val', username);
    }

    static fillPassword (password) {
        SignupElements.textboxes.password.invoke('val', password);
    }

    static clickSignupButton () {
        SignupElements.buttons.signUpButton.click();
    }

    static signUpUser (username, pass) {
        this.fillUsername(username);
        this.fillPassword(pass);
        this.clickSignupButton();
    }

    static VerifyMessageSuccessfullIsDisplay() {
        CommonMethods.verifyAlert('Sign up successful.');
    }

    static VerifiMessageFailUserIsDisplay() {
        CommonMethods.verifyAlert('This user already exist.');
    }
}