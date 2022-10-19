
const mainpage = require('../pages/main.page'); 

beforeEach(async () => {
  await browser.url('/')    
});

describe('Tests for header navigation', () => {
        
    it('TC-05: Should navigate to "Why GitLab" section', async() => {   
      await mainpage.clickwhygitlabButton();
      await mainpage.iswhyformVisible();
      await mainpage.iswhyformCorrect();
      await mainpage.urlAboutChecking();
    })  

    it('TC-06: Should navigate to "Platform" section', async() => {   
      await mainpage.clickplatformButton();
      await mainpage.isplatformformVisible();
      await mainpage.isplatformformCorrect();
      await mainpage.urlAboutChecking();
    }) 
    
    it('TC-07: Should navigate to "Solutions" section', async() => {   
      await mainpage.clicksolutionsButton();
      await mainpage.issolutionsformVisible();
      await mainpage.issolutionsformCorrect();
      await mainpage.urlAboutChecking();
    }) 

    it('TC-08: Should navigate to "Pricing" section', async() => {   
      await mainpage.clickpricingButton();
      await mainpage.ispricingtitleVisible();
      await mainpage.ispricingtitleCorrect();
      await mainpage.urlPricingChecking();
    })  

    it('TC-09: Should navigate to "Partners" section', async() => {   
      await mainpage.clickpartnersButton();
      await mainpage.ispartnerformVisible();
      await mainpage.ispartnersformCorrect();
      await mainpage.urlAboutChecking();
    }) 
    
    it('TC-10: Should navigate to "Resources" section', async() => {   
      await mainpage.clickresourcesButton();
      await mainpage.isresourcesformVisible();
      await mainpage.isresourcesformCorrect();
      await mainpage.urlAboutChecking();
    }) 

      
})