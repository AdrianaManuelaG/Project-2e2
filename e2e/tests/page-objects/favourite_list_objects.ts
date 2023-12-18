import {expect} from "@playwright/test";

function listOfFavouritesSelectors(){
    return{
        acceptAllBtn:page.getByRole('button', { name: 'Ok' }),
        kidsLabel:page.getByTestId('genderSwitch-3'),
        firstProductAdded:page.getByTestId('productTile-12744989').getByTestId('addToWishlist'),
        secondProductAdded:page.getByTestId('productTile-13024384').getByTestId('addToWishlist'),
        thirdProductAdded:page.getByTestId('productTile-12679300').getByTestId('addToWishlist'),
        numberNearFavouriteIcon:page.getByTestId('Wishlist').getByTestId('numberBadge'),
        clickOnFavouriteLabel:page.getByTestId('Wishlist').getByText('Listă favorite')
        
    }
}

class FavouriteList{
    async openPage(url:string){
        await page.goto(url);
    }
    async acceptAllPopup(){
        await listOfFavouritesSelectors().acceptAllBtn.click();
    }
    async clickKidsLabel(){
        await listOfFavouritesSelectors().kidsLabel.click();
    }
    async addProducts(){
        console.log("is working until here");
        await page.waitForLoadState();
        await listOfFavouritesSelectors().firstProductAdded.click({timeout:15000});
        await page.setDefaultTimeout(40000);
        await listOfFavouritesSelectors().secondProductAdded.click({timeout:15000});
        await listOfFavouritesSelectors().thirdProductAdded.click({timeout:15000});
    }
    async iSeeTheNumberOfAddedProd(){
        await listOfFavouritesSelectors().numberNearFavouriteIcon.click();
    }
 
}   
export const favouriteList = new FavouriteList();


