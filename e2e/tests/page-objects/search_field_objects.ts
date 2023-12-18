
function searchFieldSelectors(){
    return{
    acceptAllBtn: page.getByRole('button', { name: 'Ok' }),    
    searchfield: page.getByTestId("searchBarInput"),
    searchImput:page.getByRole( 'link',{ name:'pantaloni levis'}),
    pantsModel: page.getByTestId('productTile-9443018'),
    openSizeField:page.getByTestId('sizeFlyoutOpener'),
    chooseSize: page.getByRole('button', { name: '34 x 30', exact: true }),
    addInCart: page.getByTestId('addToBasketButton'),
    goTopay: page.getByTestId('goToBasketButton'),
    closeIcone: page.getByTestId('CloseIcon')
    }
}
class searchFieldSteps{
    async openWebsite(url:string){
        await page.goto(url);
        await searchFieldSelectors().acceptAllBtn.click();
        await page.setDefaultTimeout(10000);
    }
    async goTosearchField(){
        console.log("i am here too");
        await searchFieldSelectors().searchfield.fill("pantaloni levis");
        await searchFieldSelectors().searchImput.click();
       
       
}
    async clickOnFirstProduct(){
        await searchFieldSelectors().pantsModel.click();
        console.log(" here too")
        await searchFieldSelectors().openSizeField.click();
        await page.evaluate(() => {
            window.scrollBy(0, 500);
          });
        await page.setDefaultNavigationTimeout(15000);
        await searchFieldSelectors().chooseSize.click();
        
    }
    async addProductInCart(){
        await searchFieldSelectors().addInCart.click();
        await searchFieldSelectors().goTopay.click();
    }
    async closeThePopup(){
        await searchFieldSelectors().closeIcone.click();
    }
}   
  export const testingSearchField = new searchFieldSteps();