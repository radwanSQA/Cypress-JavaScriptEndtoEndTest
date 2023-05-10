import "cypress-iframe";
describe("handling frame", () => {
  it.skip("approch 1", () => {
    cy.visit("https://demo.automationtesting.in/CKEditor.html");
    const iframe = cy
      .get(".cke_wysiwyg_frame")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);
    iframe.clear().type("Welcome {cmd+a}");
    cy.get("#cke_35").click();
  });

  it.skip("approch 2- using custom command", () => {
    cy.visit("https://demo.automationtesting.in/CKEditor.html");

    cy.getIframe(".cke_wysiwyg_frame").clear().type("Welcome {cmd+a}");
    cy.get("#cke_35").click();
  });

  it("approch 3- using custom command", () => {
    cy.visit("https://demo.automationtesting.in/CKEditor.html");
    cy.frameLoaded(".cke_wysiwyg_frame");
    cy.iframe(".cke_wysiwyg_frame").clear().type("welcome");
  });
});
