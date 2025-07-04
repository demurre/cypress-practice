describe("Capture Screenshots&Videos", () => {
  it("Capture Screenshots&Videos", () => {
    cy.visit("https://demo.opencart.com/");
    // cy.screenshot("homepage");
    // cy.get("img[title='Your Store']").screenshot("logo");

    // automatically capture
    cy.get(
      "body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)"
    ).click();
    cy.get("div[id='content'] h2").should("have.text", "Tablets");
  });
});
