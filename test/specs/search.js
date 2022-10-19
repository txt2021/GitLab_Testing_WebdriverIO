
const mainpage = require('../pages/main.page'); 
const searchpage = require('../pages/search.page'); 

beforeEach(async () => {
  await browser.url('/')    
});

describe('Tests for search work', () => {
        
    it('TC-13: Should check search work', async() => {   
        await mainpage.clicksearchButton();
        await searchpage.enterSearchItem();
        await browser.keys("\uE007"); 
        await searchpage.isresulttitleVisible();
        await searchpage.isresulttitleCorrect();
        await searchpage.urlAboutChecking();
    })  

    it('TC-14: Should check search suggestions work', async() => {   
        await mainpage.clicksearchButton(),
        await searchpage.clickdevopsButton();
        await searchpage.urlDevopsChecking();
    }) 
    
    it('TC-15: Should redirect user to sign in form frome search page', async() => {   
        await mainpage.clicksearchButton(),
        await searchpage.clickGitlabButton()
        await searchpage.urlSigninChecking();
    }) 

      
})