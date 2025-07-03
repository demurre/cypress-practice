describe("handle tabs", () => {
  it("Approach1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example > a").invoke("removeAttr", "target").click();
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.go("back");
  });

  it.only("Approach2", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example > a").then((e) => {
      let url = e.prop("href");
      cy.visit(url);
    });
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.go("back");
  });
});
