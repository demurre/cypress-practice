describe("API Testing post calls", () => {
  it("Hard coded JSON", () => {
    const requestBody = {
      userId: 1,
      title: "test title",
      body: "test body",
    };
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.title).to.eq("test title");
      expect(response.body.body).to.eq("test body");
    });
  });

  it("Dynamically generated JSON", () => {
    const requestBody = {
      userId: 1,
      title: Math.random().toString(10).substring(2),
      body: Math.random().toString(10).substring(2),
    };
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.title).to.eq(requestBody.title);
      expect(response.body.body).to.eq(requestBody.body);
    });
  });

  it("JSON from fixture", () => {
    cy.fixture("placeholder").then((data) => {
      const requestBody = data;

      cy.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts/",
        body: requestBody,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.title).to.eq(requestBody.title);
        expect(response.body.body).to.eq(requestBody.body);

        expect(response.body).has.property("title", requestBody.title);
        expect(response.body).to.have.property("title", requestBody.title);
      });
    });
  });
});
