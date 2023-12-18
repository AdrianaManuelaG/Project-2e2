import { expect } from "@playwright/test"


function selectAnotherLanguage(){
    return{
        acceptAllBtn: page.getByRole('button', { name: 'Ok' }),
        closePopup: page.getByTestId('Close_Toggler'),
        flagIcon: page.getByTestId('languageCountrySwitch'),
        countryLabel: page.getByTestId('languageCountrySwitchCountriesOpener'),
        changeLanguage: page.getByTestId('languageCountrySwitchCountry-Austria'),
        goBackToOriginalSite : page.getByTestId('countrySwitchTargetCountry')
    }
}

class siteLanguage{
    async openPage(url:string){
        await page.goto(url);
        await selectAnotherLanguage().acceptAllBtn.click();
    }
    async flagLabel(){
        await selectAnotherLanguage().flagIcon.hover();
        await selectAnotherLanguage().countryLabel.click();
    }
    async chooseCountry(){
        await selectAnotherLanguage().changeLanguage.click();
        await selectAnotherLanguage().acceptAllBtn.click();
    }
    async returnOnpage(){
        await selectAnotherLanguage().goBackToOriginalSite.click();
    }
};
    export const languageOfSite = new siteLanguage();