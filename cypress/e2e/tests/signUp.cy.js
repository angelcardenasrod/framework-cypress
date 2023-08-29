const { CommonData } = require("../pages/common/common.data");
const { Logger } = require("../utilities/logger");
const { CommonMethods } = require("../pages/common/common.methods");
const { SignupMethods } = require("../pages/singUp/singup.methods");
const user = CommonMethods.generateRandomString();
const pass = CommonMethods.generateRandomString(7);
const existUser = 'user';
const existPass = 'pass';

describe(CommonData.testSuies.suite1, () =>{
    it('Sign up user - OK', () =>{
        Logger.stepNumber(1);
        Logger.stepDescription('Navigate to home page');
        CommonMethods.navigateToDemoBlazeApp();
    
        Logger.stepNumber(2);
        Logger.stepDescription('Click on Sign Up to top menu')
        CommonMethods.clickSignUpLink();
        
        Logger.stepNumber(3);
        Logger.stepDescription('Fill all the input with correct info')
        SignupMethods.fillUsername(user);
        SignupMethods.fillPassword(pass);
        Logger.stepNumber(4);
        Logger.stepDescription('Click on Sign Up methods')
        SignupMethods.clickSignupButton()
        cy.wait(2000);
        Logger.stepVerification('Verify that the "Sign up successful" message is displayed')
        SignupMethods.VerifyMessageSuccessfullIsDisplay();

    })

   it('Sign up user - KO', () =>{
        Logger.stepNumber(1);
        Logger.stepDescription('Navigate to home page');
        CommonMethods.navigateToDemoBlazeApp();
       
        Logger.stepNumber(2);
        Logger.stepDescription('Click on Sign Up to top menu')
        CommonMethods.clickSignUpLink();
        
        Logger.stepNumber(3);
        Logger.stepDescription('Fill all the input with correct info')
        SignupMethods.fillUsername(existUser);
        SignupMethods.fillPassword(existPass);

        Logger.stepNumber(4);
        Logger.stepDescription('Click on Sign Up methods')
        SignupMethods.clickSignupButton();
        cy.wait(2000);
        Logger.stepVerification('Verify that the "This user already exist." message is displayed')
        SignupMethods.VerifiMessageFailUserIsDisplay();

    })
})