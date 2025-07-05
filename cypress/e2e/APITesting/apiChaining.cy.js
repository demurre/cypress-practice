describe("API Testing chaining gorest", () => {
  const auth_token = "";
  it("crud in gorest", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      body: {
        name: "John",
        email: Math.random().toString(10).substring(2) + "@gmail.com",
        gender: "male",
        status: "active",
      },
      headers: { Authorization: auth_token },
    }).then((response) => {
      expect(response.status).to.eq(200);
      const userId = response.body.id;

      // update user name
      cy.request({
        method: "PUT",
        url: `https://gorest.co.in/public/v2/users/${userId}`,
        body: {
          name: "Nick",
        },
        headers: { Authorization: auth_token },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq("Nick");

        // delete user
        cy.request({
          method: "DELETE",
          url: `https://gorest.co.in/public/v2/users/${userId}`,
          headers: { Authorization: auth_token },
        }).then((response) => {
          expect(response.status).to.eq(204);
        });
      });
    });
  });
});
