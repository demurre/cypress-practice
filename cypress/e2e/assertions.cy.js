describe("Assertions", () => {
  it("Implicit asserions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // cy.url().should("include", "orangehrmlive");
    // cy.url().should(
    //   "eq",
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    // );
    // cy.url().should("contain", "orangehrmlive");

    cy.url()
      .should("include", "orangehrmlive")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrmlive");

    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");

    cy.get("a").should("have.length", "5");

    cy.get("input[placeholder='Username']")
      .type("Admin")
      .should("have.value", "Admin");
  });

  it("Explicit asserions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    let expName = "manda user";

    cy.get(".oxd-userdropdown-name").then((el) => {
      // BDD
      let actName = el.text();
      expect(actName).to.equal(expName);
      expect(actName).to.not.equal(expName);
      // TDD
      assert.equal(actName, expName);
      assert.notEqual(actName, expName);
    });
  });
});
