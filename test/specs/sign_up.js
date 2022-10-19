
const signuppage = require('../pages/signup.page') 
const mainpage = require('../pages/main.page'); 

beforeEach(async () => {
  await browser.url('/'); 
});

describe('Tests in Sign Up Page', () => {
        
    it('TC-01: Should sign up on GitLab with valid credentials', async() => {   
      await mainpage.clickLoginButton();
      await mainpage.clicksignupButton();
      await signuppage.enterFirstname();
      await signuppage.enterLastname();
      await signuppage.enterUsername();
      await signuppage.enterEmail();
      await signuppage.enterPassword();
      await signuppage.clicksubmitButton();
      await signuppage.ismessageVisible();
      await signuppage.ismessageCorrect();
      await signuppage.urlUserChecking();   
    }) 

    it('TC-02: Should sign up on GitLab with invalid credentials', async() => {   
      await mainpage.clickLoginButton();
      await mainpage.clicksignupButton();
      await signuppage.enterFirstname();
      await signuppage.enterLastname();
      await signuppage.enterUsername();
      await signuppage.enterwrongEmail();
      await signuppage.enterPassword();
      await signuppage.clicksubmitButton();
      await signuppage.isemailmessageVisible();
      await signuppage.isemailmessageCorrect();
      await signuppage.urlSignupChecking();    
    }) 

    it('TC-03: Should sign in on GitLab with valid credentials', async() => {   
      await mainpage.clickLoginButton();
      await mainpage.clicksignupButton();
      await signuppage.clicksubmitButton();
      await signuppage.isemptynameVisible();
      await signuppage.isemptynameCorrect();
      await signuppage.isemptysurnameVisible();
      await signuppage.isemptysurnameCorrect();
      await signuppage.urlSignupChecking();    
    }) 

    it('TC-04: Should sign up on GitLab with Saleforce', async() => {   
      await mainpage.clickLoginButton();
      await mainpage.clicksignupButton();
      await signuppage.clicksaleforceButton();
      await signuppage.issaleforceVisible();
      await signuppage.urlSaleforceChecking();
    }) 
})