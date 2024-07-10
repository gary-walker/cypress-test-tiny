const emailInput = 'input[name="email"]';
const passwordInput = 'input[type="password"]';
const loginButton = '._flexButton_2u3cq_1._blue_2u3cq_42._outline_2u3cq_20';

class LoginPage {
  visitSignInPage() {
    const signInPageUrl = 'http://app.yourdocket.com/signin';
    cy.visit(signInPageUrl);
    cy.url().should('include', '/signin');
  }

  fillEmail(email) {
    cy.get(emailInput).type(email);
  }

  fillPassword(password) {
    cy.get(passwordInput).type(password);
  }

  clickLoginButton() {
    cy.get(loginButton).first().click();
  }

  isSignedIn() {
    cy.url().should('include', '/today');
  }
}

export default LoginPage;

