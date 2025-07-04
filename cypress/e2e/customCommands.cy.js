describe("Custom commands", () => {
  it("handling links", () => {
    cy.visit("https://leatherman-tools.com.ua/");
    // cy.get(
    //   "div[id='common-home'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) a:nth-child(1)"
    // ).click();
    cy.clickLink(
      "Мультитул Leatherman Surge 830165 + надфіль, чохол + сумка-органайзер у подарунок!"
    );
    cy.get("div[class='col-12 ds-page-title pb-3'] h1").should(
      "have.text",
      "Мультитул Leatherman Surge 830165 + надфіль, чохол + сумка-органайзер у подарунок!"
    );
  });

  it("overwriting existing command", () => {
    cy.visit("https://leatherman-tools.com.ua/");
    cy.clickLink(
      "Мультитул Leatherman Surge 830165 + надфіль, чохол + сумка-органайзер у подарунок!"
    );
    cy.get("div[class='col-12 ds-page-title pb-3'] h1").should(
      "have.text",
      "Мультитул Leatherman Surge 830165 + надфіль, чохол + сумка-органайзер у подарунок!"
    );
  });

  it.only("login command", () => {
    cy.visit("https://demurre-store.vercel.app/");
    cy.loginapp("123@gmail.com", "123123");
    cy.get("#logout-btn").should("be.visible");
  });
});
