describe("Mouse operations", () => {
  it("Mouse Hover", () => {
    cy.visit("https://demo.opencart.com/");
    cy.get(
      "body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)"
    ).should("not.be.visible");
    cy.get(".nav > :nth-child(1) > .dropdown-toggle")
      .trigger("mouseover")
      .click();
    cy.get(
      "body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)"
    ).should("be.visible");
  });

  it("Right click", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    // by trigger
    // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
    // cy.get(".context-menu-list.context-menu-root").should("be.visible");

    // by right click
    cy.get(".context-menu-one.btn.btn-neutral").rightclick();
    cy.get(".context-menu-list.context-menu-root").should("be.visible");
  });

  it("Double click", () => {
    cy.visit(
      "https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick3"
    );
    cy.frameLoaded("#iframeResult");

    // by trigger
    // cy.iframe("#iframeResult")
    //   .find("button[ondblclick='myFunction()']")
    //   .trigger("dblclick");
    // cy.iframe("#iframeResult")
    //   .find("#field2")
    //   .should("have.value", "Hello World!");

    // by double click
    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .dblclick();
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");
  });

  it("Drag&Drop", () => {
    cy.visit(
      "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    cy.get("#box6").should("be.visible");
    cy.get("#box106").should("be.visible");

    cy.get("#box6").drag("#box106", { force: true });
  });

  it.only("Scrolling page", () => {
    cy.visit("https://www.worldometers.info/geography/flags-of-the-world/");
    cy.get(".not-prose > :nth-child(187)").scrollIntoView({
      duration: 2000,
    });
    cy.get(".not-prose > :nth-child(187)").should("be.visible");
  });
});
