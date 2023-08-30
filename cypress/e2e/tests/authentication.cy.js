import { CommonData } from "../pages/common/common.data";
import { CommonMethods } from "../pages/common/common.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../utilities/logger";

describe(CommonData.testSuies.suite2, () => {
    it('Login - OK', ()=>{
        Logger.stepNumber(1);
        Logger.stepDescription('Navigate to home page');
        CommonMethods.navigateToDemoBlazeApp();

        Logger.stepNumber(2);
        Logger.stepDescription('Click on "Log in" in the navigation bar');
        CommonMethods.clickLogInLink();

        Logger.stepNumber(3);
        Logger.stepDescription('Enter a valid username and password');
        LoginMethods.fillUsername(LoginData.validCredentials.username);
        LoginMethods.fillPassword(LoginData.validCredentials.password);

        Logger.stepNumber(4);
        Logger.stepDescription('Click on Log In button');
        LoginMethods.clickButtonLogin();
        Logger.stepVerification('Verify that the user is redirected to the home page');
        CommonMethods.checkSignUserCorrect(LoginData.validCredentials.username);
    })

    it('Login - KO', ()=>{
        Logger.stepNumber(1);
        Logger.stepDescription('Navigate to home page');
        CommonMethods.navigateToDemoBlazeApp();

        Logger.stepNumber(2);
        Logger.stepDescription('Click on "Log in" in the navigation bar');
        CommonMethods.clickLogInLink();

        Logger.stepNumber(3);
        Logger.stepDescription('Enter a invalid username and password');
        LoginMethods.fillUsername(LoginData.validCredentials.username);
        LoginMethods.fillPassword('invalidPass');

        Logger.stepNumber(4);
        Logger.stepDescription('Click on Log In button');
        LoginMethods.clickButtonLogin();
        cy.wait(2000);
        Logger.stepVerification('Verify that an error message is displayed indicating that the login has been successful failed');
        LoginMethods.verifyWrongPasswordMessage();
    })
})