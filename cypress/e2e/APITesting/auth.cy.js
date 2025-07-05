describe("API Testing auth", () => {
  it("basic auth", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/basic-auth/example_username/example_password",
      auth: { user: "example_username", pass: "example_password" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.authenticated).to.eq(true);
    });
  });

  it("digest auth", () => {
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/digest-auth",
      auth: { username: "postman", password: "password", method: "degest" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.authenticated).to.eq(true);
    });
  });

  const token = "";
  it("bearer token auth", () => {
    cy.request({
      method: "GET",
      url: "https://api.github.com/user/repos",
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it.only("API key auth", () => {
    cy.request({
      method: "GET",
      url: "https://api.nasa.gov/planetary/apod",
      qs: {
        appid: "",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
