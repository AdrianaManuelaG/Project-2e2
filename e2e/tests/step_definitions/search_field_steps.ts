import {Given, When, Then} from "@cucumber/cucumber";
import { testingSearchField } from "../page-objects/search_field_objects";


Given("I open the page of site",async function(){
    await testingSearchField.openWebsite("https://www.aboutyou.ro/");
});
When("I fill search field", {timeout: 2 * 5000},async function(){
    await testingSearchField.goTosearchField();
});
Then("I click on first item and select size", async function(){
    await testingSearchField.clickOnFirstProduct();
});
When("I add product in cart",async function(){
    await testingSearchField.addProductInCart();
});
Then("I go to cart page and close it", async function(){
    await testingSearchField.closeThePopup();
});