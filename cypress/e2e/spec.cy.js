import LoginPage from '../pages/pageObject.cy.js';

describe('Login Flow', () => {
  it('should log in successfully', () => {
    const loginPage = new LoginPage();
    const email = "test@email.com";
    const password = "password";

    loginPage.visitSignInPage();
    loginPage.fillEmail(email);
    loginPage.fillPassword(password);
    loginPage.clickLoginButton();
    loginPage.isSignedIn();
  });
});
