describe("handle dropdowns", () => {
  it("Dropdown with select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("#zcf_address_country")
      .select("Ukraine")
      .should("have.value", "Ukraine");
  });

  it("Dropdown without select", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click();
    cy.get(".select2-search__field").type("Ukraine").type("{enter}");
    cy.get("#select2-billing_country-container").should("have.text", "Ukraine");
  });

  it("Autosuggest dropdown", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("Kyiv");
    cy.get(".suggestion-title").contains("Kyiv").click();
  });

  it.only("Dynamic dropdown", () => {
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").type("cypress");
    cy.get("div.wM6W7d>span").should("have.length", 13);

    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() === "cypress documentation") {
        cy.wrap($el).click();
      }
    });

    cy.get("#APjFqb").should("have.value", "cypress documentation");
  });
});
