import { languageOfSite } from "../page-objects/change_language_obj";
import { Given, When, Then } from "@cucumber/cucumber";


Given("I navigate on website page", async function(){
    await languageOfSite.openPage("https://www.aboutyou.ro/");
});

When("I click on the flag icon", {timeout: 3 * 5000}, async function(){
    await languageOfSite.flagLabel();
});
Then("I choose the language i want", async function(){
    await languageOfSite.chooseCountry();
});
When("I return to the original site", async function(){
    await languageOfSite.returnOnpage();
});