describe("Hooks and Tags", () => {
  before(() => {
    cy.log("launch app");
  });

  after(() => {
    cy.log("close app");
  });

  beforeEach(() => {
    cy.log("login");
  });

  afterEach(() => {
    cy.log("logout");
  });

  it("search", () => {
    cy.log("searching");
  });

  it.skip("advanced search", () => {
    cy.log("advanced searching");
  });

  it.only("listing products", () => {
    cy.log("listing products");
  });
});
