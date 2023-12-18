import { favouriteList } from "../page-objects/favourite_list_objects";
import {Given, When, Then} from "@cucumber/cucumber";


Given("I open the site page", async function(){
    await favouriteList.openPage("https://www.aboutyou.ro/");
});
When("I click on acceptAll button",async function(){
    await favouriteList.acceptAllPopup();
});
Then("I go to kids label",async function() {
    await favouriteList.clickKidsLabel(); 
});
When("I add first three products in favourite list",{timeout:20000},async function(){
    await favouriteList.addProducts();
});
Then("I should see near the favourite icon the number of products added i click on it", async function(){
    await favouriteList.iSeeTheNumberOfAddedProd();
});

