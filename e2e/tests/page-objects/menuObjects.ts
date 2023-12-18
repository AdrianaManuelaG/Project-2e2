import { expect } from "@playwright/test";

function getMenuSelectors(){ 
    return{
        women: page.getByTestId("genderSwitch-1" ),
        men: page.getByTestId("genderSwitch-2"),
        kids: page.getByTestId("genderSwitch-3"),
        rFlagimg: page.getByTestId("languageCountrySwitchSelectedCountryFlag"), 
        srchBarImput: page.getByTestId("searchBarInput"),
        contact: page.getByTestId("metaBarItem_LINK_TYPE_CONTACT"),
        retur: page.getByTestId("UspText_100deziledreptderetur"),
        favourite: page.getByTestId("Wishlist"),
        cart: page.getByTestId("Basket"),
        ramburs: page.getByTestId("UspText_Plataramburs"),
        topProducts: page.getByTestId("Header_navigation_list_item_Top 100")
       
    }
}
class MenuObjects{
    async openPage(url: string) {
        await page.goto(url);
    }
    async clickWomenBtn(){
        const womenBtn = await getMenuSelectors().women;
        await womenBtn.click();
    }
    async checkForUrl(){
        const expectedUrl = await getMenuSelectors().women.getAttribute("href");
        const curentUrl = await page.url();
        await expect(curentUrl).toContain(expectedUrl);
    }
    async clickMensBtn(){
        const menBtn = await getMenuSelectors().men;
        await menBtn.click();
    }
    async urlCheck(){
        const urlCheck = 'https://www.aboutyou.ro/?gender=male';
        const actualUrl = await page.url();
        await expect(actualUrl).toBe(urlCheck);
    }
    async clickKidsBtn(){
        const kidsBtn = await getMenuSelectors().kids;
        await kidsBtn.click();
    }
    async kidsUrl(){
        const urlKids = "https://www.aboutyou.ro/c/copii-138113"
        const actualUrl = await page.url();
        await expect(actualUrl).toBe(urlKids);
    }
    async roFlagImg(){
        const flagImg = await getMenuSelectors().rFlagimg;
        await flagImg.click();
    }
    async imgcheck(){
        const flag = page.getByTestId("languageCountrySwitchSelectedCountryFlag");
        await expect(flag).toBeAttached();
    }
    async srchBtn(){
        const searchButton = await getMenuSelectors().srchBarImput;
        await searchButton.click();
    }
    async searchField(){
        const search = page.getByTestId("searchBarInput");
        await expect(search).toBeAttached();
    }
    async contact(){
        const contactBtn = await getMenuSelectors().contact;
        await contactBtn.click();
    }
    async helpContactUrl(){
        const expectedurlContact = "https://www.aboutyou.ro/h"
        const actualUrlHelpContact = await page.url();
        await expect(actualUrlHelpContact).toBe(expectedurlContact);
    }
    async returOption(){
        const retur = await getMenuSelectors().retur
        await retur.click();
    }
    async returUrlCheck(){
        const returUrl = 'https://www.aboutyou.ro/h/livrare/q-360014777500';
        const actualUrl = await page.url();
        await expect(actualUrl).toBe(returUrl);
    }
    async wishList(){
        const wishListIcon = await getMenuSelectors().favourite;
        await wishListIcon.click();
    }
    async wishListUrl(){
        const wishListUrl = 'https://www.aboutyou.ro/lista-favorite';
        const testUrl = await page.url();
        await expect(testUrl).toBe(wishListUrl);
    }
    async cartIcon(){
        const basket = await getMenuSelectors().cart;
        await basket.click();
    }
    async cartPage(){
        const emptyCart = page.getByTestId('emptyBasketMessage');
        await expect(emptyCart).toBeAttached();
    }
    async rambursPayment(){
        const rambursP = await getMenuSelectors().ramburs;
        await rambursP.click();
    }
    async rambursPaymentPageCheck(){
        const rambursPaymentPage = page.getByText("Care sunt costurile de transport?");
        await expect(rambursPaymentPage).toBeAttached();
        
    }
    async topOneHundredItem(){
        const topOneHundred = await getMenuSelectors().topProducts;
        await topOneHundred.click();
    }
    async topItemsPageCheck(){
        const pageTitle = page.getByTestId("categoryHeaderTitle");
        await expect(pageTitle).toBeVisible();

    }
}
    export const menuObjects = new MenuObjects();



