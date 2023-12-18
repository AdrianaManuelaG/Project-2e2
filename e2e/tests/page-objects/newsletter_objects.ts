import { setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { getTokenSourceMapRange } from "typescript";


function firstPageOperation(){
    return{
    acceptAllbtn: page.getByRole("button", {name:'ok'}),  
    newsLetterWomen: page.getByText('Pentru femei', { exact: true }),
    emailAdressImput: page.getByRole("textbox", {name:"Adresa ta de e-mail"}),
    emailInput: page.getByTestId('textInput'),
    registerBtn: page.getByLabel('Abonează-te'),
    modalContent: page.getByTestId("statusPopupSuccessContent"),
    popupclosebtn: page.getByTestId('statusPopupSuccessCloseIcon'),
    clickMenButton: page.locator('label').filter({ hasText: 'Pentru bărbați' }).locator('div'),
    errorMessage: page.getByTestId('ErrorInfoText')
    }
} 
class newsletter{
    async openPage(url: string){
        await page.goto(url);
    }
    async acceptAll(){
        await firstPageOperation().acceptAllbtn.click();
    }
    async clickForWomenBtn(){
        console.log("I am here");
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        console.log("I am other here");
        if(await firstPageOperation().newsLetterWomen.isEnabled()=== true){
           await firstPageOperation().newsLetterWomen.click();
 }
        else{
            return;
        }
        console.log("I see the button");
    }
    async emailfield(){
        await page.waitForLoadState("domcontentloaded");
        await firstPageOperation().emailAdressImput.isVisible();
        await firstPageOperation().emailInput.fill('adrianagula25@gmail.com');
    }
    async pressButton(){
        const register = await firstPageOperation().registerBtn;
        await register.click();
    }
    async popupModal(){
        await firstPageOperation().modalContent.isVisible();
    }
    async closePopup(){
        await firstPageOperation().popupclosebtn.click();
        
    }
    async clickMensBtn(){
        await firstPageOperation().clickMenButton.click();
    }
    async clickSubscribe(){
        await firstPageOperation().registerBtn.click();
    }
    async reciveErrorMsg(){
        await firstPageOperation().errorMessage.isVisible();
    }

}
export const footerObjects = new newsletter();

