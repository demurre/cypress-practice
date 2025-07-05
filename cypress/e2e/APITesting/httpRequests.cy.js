describe("API Testing", () => {
  it("Get call", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("eq", 200);
  });

  it("Post call", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: {
        userId: 1,
        title: "post test title",
        body: "post test body",
      },
    })
      .its("status")
      .should("eq", 201);
  });

  it("Put call", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        userId: 1,
        id: 1,
        title: "test title put",
        body: "test body put",
      },
    })
      .its("status")
      .should("eq", 200);
  });

  it("Delete call", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    })
      .its("status")
      .should("eq", 200);
  });
});
