describe("Check radio and checkboxes", () => {
  it("Check radio", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("input#male").should("be.visible");
    cy.get("input#female").should("be.visible");

    cy.get("input#male").check().should("be.checked");
    cy.get("input#female").should("not.be.checked");
  });

  it.only("Checkboxes", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("input#sunday").should("be.visible");

    cy.get("input#sunday").check().should("be.checked");
    cy.get("input#sunday").uncheck().should("not.be.checked");

    cy.get("input.form-check-input[type='checkbox']")
      .check()
      .should("be.checked");
    cy.get("input.form-check-input[type='checkbox']")
      .uncheck()
      .should("not.be.checked");

    cy.get("input.form-check-input[type='checkbox']")
      .first()
      .check()
      .should("be.checked");
    cy.get("input.form-check-input[type='checkbox']")
      .last()
      .check()
      .should("be.checked");
  });
});
