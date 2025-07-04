class Login {
  txtUserName = "input[placeholder='Username']";
  txtPassword = "input[placeholder='Password']";
  btnLogin = "button[type='submit']";
  labelMessage = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

  setUserName(username) {
    cy.get(this.txtUserName).type(username);
  }

  setPassword(password) {
    cy.get(this.txtPassword).type(password);
  }

  clickSubmit() {
    cy.get(this.btnLogin).click();
  }

  verifyLogin() {
    cy.get(this.labelMessage).should("have.text", "Dashboard");
  }
}

export default Login;
