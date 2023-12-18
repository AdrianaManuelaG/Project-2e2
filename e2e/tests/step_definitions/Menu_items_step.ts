import { Given, When, Then } from "@cucumber/cucumber";
import { menuObjects } from "../page-objects/menuObjects";

Given('I open the home page',  async function () {
  const url = 'https://www.aboutyou.ro/';
  await menuObjects.openPage(url);
});
  
When('I click women\'s button', async function () {
   await menuObjects.clickWomenBtn();
});
Then('I should see the correct url', async function () {
    await menuObjects.checkForUrl();
});


When("I click men's button", async function() {
  await menuObjects.clickMensBtn();
});
Then('I should see at the end of url gender=male', async function() {
  await menuObjects.urlCheck();
});


When("I click kid's button", async function(){
  await menuObjects.clickKidsBtn();
});
Then("I should see a correct url", async function() {
  await menuObjects.kidsUrl();
});


When('I check the flag icon', async function(){
  await menuObjects.roFlagImg();
});
Then('I should see a flag up on the right', async function(){
  await menuObjects.imgcheck();
});


When('I click on search field', async function(){
  await menuObjects.srchBtn();
});
Then('I should be able to fill the field', async function(){
  await menuObjects.searchField();
});


When('I click contact button', async function(){
  await menuObjects.contact();
});
Then('I have to see correct url', async function(){
  await menuObjects.helpContactUrl();
});


When('I click on retur button', async function(){
  await menuObjects.returOption();
});
Then('I should see a new url', async function (){
  await menuObjects.returUrlCheck();
});


When('I click wish list button', async function(){
  await menuObjects.wishList();
});
Then('I should be redirected on wish list page', async function(){
  await menuObjects.wishListUrl();
});

When("I click on cart button", async function() {
  await menuObjects.cartIcon(); 
});
Then("A new page should open with a message", async function() {
  await menuObjects.cartPage();
});

When("I click on ramburs payment option", async function() {
  await menuObjects.rambursPayment();  
});
Then("A new page should open with a new url", async function() {
  await menuObjects.rambursPaymentPageCheck();
});

When("I click on top one hundred button", async function(){
  await menuObjects.topOneHundredItem();
});
Then("I should be redirected on a new page", async function(){
  await menuObjects.topItemsPageCheck();
});


