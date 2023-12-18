import { Given, When, Then} from "@cucumber/cucumber";
import { footerObjects} from "../page-objects/newsletter_objects";

Given("I navigate the homepage", async function(){
    await footerObjects.openPage("https://www.aboutyou.ro/");
});
When ("I click accept button",async function(){
    await footerObjects.acceptAll();
});
Then("I see for women button", {timeout: 50 * 1000} ,async function(){
    await footerObjects.clickForWomenBtn();

});
When("I see the email field and I fill it",async function(){
    await footerObjects.emailfield();
});
Then("I press the button register", async function(){
    await footerObjects.pressButton();
});
When("I should recive an popup message", async function() {
   await footerObjects.popupModal(); 
});
Then("I close the popup message",async function(){
    await footerObjects.closePopup();
});
When("I cick on men newsletter button",async function(){
    await footerObjects.clickMensBtn();
});
Then("I click subscribe button with empty email field",async function(){
    await footerObjects.clickSubscribe();
});
When("I should recive an error message",async function(){
    await footerObjects.reciveErrorMsg();
});
