describe("Navigation", () => {
  it("navigation", () => {
    cy.visit("https://demo.opencart.com/");
    cy.title().should("eq", "Your Store");
    cy.get(
      "body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)"
    ).click();
    cy.get("div[id='content'] h2").should("have.text", "Cameras");

    cy.go("back");
    cy.title().should("eq", "Your Store");

    cy.go("forward");
    cy.get("div[id='content'] h2").should("have.text", "Cameras");

    cy.go(-1);
    cy.title().should("eq", "Your Store");

    cy.go(1);
    cy.get("div[id='content'] h2").should("have.text", "Cameras");

    cy.reload();
  });
});
