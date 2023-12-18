import { setDefaultTimeout } from "@cucumber/cucumber";
import {expect, Page , ElementHandle} from "@playwright/test";

function cart(){
    return{
        clickOnKidsLabel: page.getByTestId("genderSwitch-3"),
        clickOnProduct: page.getByTestId("productTileTracker-4852633"),
        sizeOption: page.getByTestId("sizeFlyoutOpener"),
        slectSize: page.locator("css=#sizeOption_60565510_active"),
        addToBasketBtn: page.getByTestId("addToBasketButton")
}
}
class AddProduct{
    async openPage(url: string) {
        await page.goto(url);
        // await page.waitForLoadState('load');
      }

    async btnForKids(){
        await cart().clickOnKidsLabel.click();

    }
      
    async selectProduct(){
        const product = cart().clickOnProduct.first();
        await product.click()
        await page.setDefaultTimeout(40000);
        
     }
      
    
    async size(){
         await cart().sizeOption.click();
        const chooseSize = page.getByRole('button').filter({has: page.getByTestId("sizeOption_40669809_active")});
        await chooseSize.click();
        //  await cart().slectSize.click();
        console.log("i am here");
    }
    
    async addInCart(){
        console.log("hi");
        await cart().addToBasketBtn.click();
      }
    }
    
export const addProduct = new AddProduct();