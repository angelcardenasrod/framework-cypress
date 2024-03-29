import { CartMethods } from "../pages/cartPage/cart.methods";
import { CommonData } from "../pages/common/common.data";
import { CommonMethods } from "../pages/common/common.methods";
import { ProductsDetailsMethods } from "../pages/detailsProduct/productDetails.methods";
import { HomeMethods } from "../pages/homePage/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { PlaceOrderData } from "../pages/placeOrderPage/placeOrder.data";
import { PlaceOrderMethods } from "../pages/placeOrderPage/placeOrder.methods";
import { ThankYouPageMethods } from "../pages/thankYouPage/thankyoupage.methods";
import { Logger } from "../utilities/logger";
const product = 'ASUS Full HD'
const dataUser = PlaceOrderData.testData;

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

    it('Add product to cart', () => {
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
        
        Logger.stepNumber(4);
        Logger.stepDescription('Click on specific product');
        HomeMethods.productLink(product);
        Logger.stepVerification('Verify that the product details page is displayed');
        ProductsDetailsMethods.verifyTitleProduct(product);

        Logger.stepNumber(5);
        Logger.stepDescription('Click on add to cart button');
        ProductsDetailsMethods.clickOnAddButton();
        Logger.stepVerification('Verify that a confirmation message is displayed');
        ProductsDetailsMethods.verifyMessageConfirmIsDisplay();
        Logger.stepVerification('Verify that the product is added to the cart');
        CommonMethods.clickCartLink();
        CartMethods.verifyProductAdd(product)
        
    })

    it('Make a purchase', () => {
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
        
        Logger.stepNumber(4);
        Logger.stepDescription('Click on specific product');
        HomeMethods.productLink(product);
        Logger.stepVerification('Verify that the product details page is displayed');
        ProductsDetailsMethods.verifyTitleProduct(product);

        Logger.stepNumber(5);
        Logger.stepDescription('Click on add to cart button');
        ProductsDetailsMethods.clickOnAddButton();
        Logger.stepVerification('Verify that a confirmation message is displayed');
        ProductsDetailsMethods.verifyMessageConfirmIsDisplay();
        Logger.stepVerification('Verify that the product is added to the cart');
        CommonMethods.clickCartLink();
        CartMethods.verifyProductAdd(product)
        
        Logger.stepNumber(6)
        Logger.stepDescription('Click on place order button');
        CartMethods.clickOnPlaceOrder();

        Logger.stepNumber(7)
        Logger.stepDescription('Complete the required fields on the shipping information page');
        PlaceOrderMethods.completeFormForPurchase(dataUser);

        Logger.stepNumber(8)
        Logger.stepDescription('Click on purchase button');
        PlaceOrderMethods.clickOnPurchase();
        Logger.stepVerification('Verify that a confirmation message is displayed');
        ThankYouPageMethods.verifyCheckIconIsDisplay();
        ThankYouPageMethods.clickOnOk();
        Logger.stepVerification('The user is redirected to the homepage')
    })
})