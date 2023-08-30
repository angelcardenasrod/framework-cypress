import { CommonData } from "../pages/common/common.data";
import { CommonMethods } from "../pages/common/common.methods";
import { HomeMethods } from "../pages/homePage/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../utilities/logger";

describe(CommonData.testSuies.suite3, () => {
    it('Category navigation', () => {
        Logger.stepNumber(1);
        Logger.stepDescription('Log in as a registered user');
        Logger.subStep('Navigate to Demoblaze app');
        CommonMethods.navigateToDemoBlazeApp();
        LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);

        Logger.stepNumber(2);
        Logger.stepDescription('Navigate to home page');
        CommonMethods.clickHomeLink();

        Logger.stepNumber(3);
        Logger.stepDescription('Select a product category in the navigation menu')
        HomeMethods.clickOnMonitorsOption();
        Logger.stepVerification('Verify that the list of products corresponding to the category is displayed selected');
        HomeMethods.verifyProductIsDisplay('Apple monitor 24');
        HomeMethods.verifyProductIsDisplay('ASUS Full HD');
    })
})