import Login from "../pages/LoginPage2";

describe("POM", () => {
  // Login without POM
  it("Login without POM", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[placeholder="Password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
  });

  // Login with POM
  it("Login with POM", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    const login = new Login();
    login.setUserName("Admin");
    login.setPassword("admin123");
    login.clickSubmit();
    login.verifyLogin();
  });

  // Login with POM and fixture
  it.only("Login with POM and fixture", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.fixture("orangehrm").then((data) => {
      const login = new Login();
      login.setUserName(data.username);
      login.setPassword(data.password);
      login.clickSubmit();
      login.verifyLogin();
    });
  });
});
