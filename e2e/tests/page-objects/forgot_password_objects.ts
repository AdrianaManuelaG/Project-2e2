import { setDefaultTimeout } from "@cucumber/cucumber";


function forgotPasswordSelectors(){
    return{
        acceptAllBtn:page.getByRole('button', { name: 'Ok' }),
        loginLabel:page.getByTestId('UserAccount').getByText('Logare'),
        switchToLogin:page.getByTestId('tabs_tab_1'),
        emailImput:page.getByTestId('EmailField'),
        clickForgotPass:page.getByTestId('ForgotPasswordButton'),
        submitForgotPassBtn: page.getByTestId('ForgotPasswordSubmitButton'),
        popupFail:page.getByText('Ups, a apărut o mică eroare')
        //loginModal: page.getByTestId('modalBoxContent').locator('div').filter({ hasText: 'Înregistrează-teLogareFacebookAppleSau cu adresa de e-mailPrenumeNume de familie' })
    }
}
 class ForgotPassword{
    async openPage(url:string){
        await page.goto(url);
        //await forgotPasswordSelectors().acceptAllBtn.click();
    }
    async openLoginModal(){
        await forgotPasswordSelectors().loginLabel.click();
    }
    async switchToLogin(){
        //await forgotPasswordSelectors().loginModal.isVisible();
        await forgotPasswordSelectors().switchToLogin.click();
    }
    async fillTheEmail(){
        await forgotPasswordSelectors().emailImput.fill("adrianagula25@gmail.com");
        await setDefaultTimeout(40000);
    }
    async clickForgotPass(){
        await forgotPasswordSelectors().clickForgotPass.click();
    }
    async fillTheEmailSecondTime(){
        await forgotPasswordSelectors().emailImput.fill("adrianagula25@gmail.com");
        await setDefaultTimeout(20000);
    }
    async pressSubmitBtn(){
        await forgotPasswordSelectors().submitForgotPassBtn.click();
    }
    async failPopupApear(){
        await forgotPasswordSelectors().popupFail.isVisible();
    }
 }

 export const forgotPassword = new ForgotPassword();