describe("CSS Locators", () => {
  it("verify title positive", () => {
    cy.visit("https://www.automationexercise.com/products");
    cy.get("input#search_product").type("Tshirt");
    cy.get("button#submit_search").click();
    cy.get("h2.title.text-center").contains("Searched Products");
    cy.get(".product-image-wrapper").contains(/Tshirt/i);
  });
});
