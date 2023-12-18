import { Given, Then, When } from "@cucumber/cucumber";
import { addProduct } from "../page-objects/add_in_cart_objects";

Given("I navigate on the home page", async function()  {
    await addProduct.openPage('https://www.aboutyou.ro/'); 
});
When("I click on kids label",{timeout: 60 * 1000},async function(){
    await addProduct.btnForKids();
});
Then("I want to click on first item",{timeout: 60 * 1000},async function(){
    await addProduct.selectProduct();
});
When("I select the size of item",{timeout: 60 * 1000},async function(){
    await addProduct.size();
});

Then("I click on Add in cart",{timeout: 80 * 10000}, async function(){
    await addProduct.addInCart();
});
