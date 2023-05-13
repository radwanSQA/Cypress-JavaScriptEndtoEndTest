import "cypress-file-upload";

describe("file upload", () => {
  it.skip("single file upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("test1.pdf");
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });

  it.skip("single file upload-rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "test1.pdf",
      fileName: "myfile.pdf",
    });
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });

  it.skip("single file upload-rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("test1.pdf", {
      subjectType: "drag-n-drop",
    });
    cy.wait(5000);
    cy.get(
      "#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span"
    ).contains("test1.pdf");
  });

  it.skip("single file upload-rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("test1.pdf", {
      subjectType: "drag-n-drop",
    });
    cy.wait(5000);
    cy.get(
      "#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span"
    ).contains("test1.pdf");
  });

  it("Multiple file upload", () => {
    cy.visit("https://demo.automationtesting.in/FileUpload.html");
    //cy.get(".btn-file").attachFile(["test1.pdf", "test2.pdf"]);
    //cy.wait(5000);
  });
});
