import{ Given, When, Then} from "@cucumber/cucumber";
import { forgotPassword } from "../page-objects/forgot_password_objects";


Given("I open the page of the site", async function(){
    forgotPassword.openPage("https://www.aboutyou.ro/");
});
When("I click on login label", async function(){
    forgotPassword.openLoginModal();
});
Then("The login modal opens i switch from register to login", async function(){
    forgotPassword.switchToLogin();
});
When("I click on email field and fill it",{timeout: 50 * 1000},async function(){
    forgotPassword.fillTheEmail();
});
Then("I click forgot password label",{timeout: 50 * 1000}, async function(){
    forgotPassword.clickForgotPass();
});
When("I fill again the email field",{timeout: 50 * 2000}, async function(){
    forgotPassword.fillTheEmailSecondTime();
});
Then("I press submit button", {timeout: 50 * 2000},async function(){
    forgotPassword.pressSubmitBtn();
});
When("I see a fail message down the page",{timeout: 50 * 1000}, async function(){
    forgotPassword.failPopupApear();
});