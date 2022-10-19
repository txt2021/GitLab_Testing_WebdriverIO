
const mainpage = require('../pages/main.page'); 
const supportpage = require('../pages/support.page'); 

beforeEach(async () => {
  await browser.url('/')    
});

describe('Tests for all support services', () => {
        
    it('TC-16: Should navigate user to Contact Support', async() => {   
        await mainpage.clickLoginButton();
        await supportpage.clickcontsctButton();
        await supportpage.isresultVisible();
        await supportpage.iscontactCorrect();
        await supportpage.urlSupportChecking();
    })  

    it('TC-17: Should navigate user to Get Help page', async() => {   
        await mainpage.clickLoginButton();
        await supportpage.clickgethelpButton();
        await supportpage.isresultVisible();
        await supportpage.isgethelpCorrect();
        await supportpage.urlGethelpChecking();
    }) 
    
    it('TC-18: Should navigate user to GitLab Professional Services', async() => {   
        await mainpage.clickLoginButton();
        await supportpage.clickservicesButton();
        await supportpage.isservicesVisible();
        await supportpage.isservicesCorrect();
        await supportpage.urlServicesChecking();
    }) 

    it('TC-19: Should navigate user to Talk to an Expert page', async() => {   
        await mainpage.clickLoginButton();
        await supportpage.clicksalesButton();
        await supportpage.issalesVisible();
        await supportpage.issalesCorrect();
        await supportpage.urlSalesChecking();
    }) 
    
    it('TC-20: Should navigate user to registration page', async() => {   
        await mainpage.clickLoginButton();
        await supportpage.clickregisterButton();
        await supportpage.isregisterformVisible();
        await supportpage.urlSignupChecking();
    }) 

      
})