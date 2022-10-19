
const mainpage = require('../pages/main.page'); 
const trialpage = require('../pages/trial_expert.page'); 

beforeEach(async () => {
  await browser.url('/')    
});

describe('Tests for free trial and talk to an expert functions', () => {
        
    it('TC-11: Should display "Talk to an expert" form', async() => {   
        await mainpage.clickexpertsButton();
        await trialpage.istitleVisible();
        await trialpage.istitleCorrect();
        await trialpage.isexpertsformVisible();
        await trialpage.urlSalesChecking();
    })  

    it('TC-12: Should display "Free trial" form', async() => {   
        await mainpage.clicktrialButton();
        await trialpage.istrialVisible();
        await trialpage.istrialCorrect();
        await trialpage.istrialformVisible();
        await trialpage.urlTrialChecking();
    }) 
    
      
})