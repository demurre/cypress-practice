describe("File upload", () => {
  it("Single file upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("coolcat.png");
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });

  it("File upload - rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "coolcat.png",
      fileName: "newcoolcat.png",
    });
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });

  it("File upload - drag&drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("coolcat.png", {
      subjectType: "drag-n-drop",
    });
    cy.wait(5000);
    cy.get(
      "#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span"
    ).contains("coolcat.png");
  });

  it("Multiple files upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile(["coolcat.png", "chillcat.png"]);
    cy.get(":nth-child(6) > strong").should(
      "contain.text",
      "Files You Selected:"
    );
    cy.get("#fileList").contains("coolcat.png").and("contain", "chillcat.png");
  });

  it.only("File upload - shadow dom", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    );
    cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile(
      "coolcat.png"
    );
    cy.wait(5000);
    cy.get(".smart-item-name", { includeShadowDom: true }).contains(
      "coolcat.png"
    );
  });
});
