import "cypress-iframe";
require("@4tw/cypress-drag-drop");

describe("Mouse Event", () => {
  it.skip("Mouse Hover", () => {
    cy.visit("https://demo.opencart.com/");
    cy.get(".nav > :nth-child(1) > .dropdown-toggle")
      .trigger("mouseover")
      .click();
    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("be.visible");
  });

  it.skip("Right click", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
    // cy.get('.context-menu-icon-copy>span').should('be.visible')

    cy.get(".context-menu-one.btn.btn-neutral").rightclick();
    cy.get(".context-menu-icon-copy>span").should("be.visible");
  });

  it.skip("double click", () => {
    cy.visit(
      "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick_html"
    );
    cy.frameLoaded("#iframeResult");

    cy.iframe("#iframeResult").find("#demo").trigger("dblclick");
  });

  it.skip("drag and drop", () => {
    cy.visit(
      "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    cy.get("#box6").should("be.visible");
    cy.get("#box106").should("be.visible");

    cy.wait(3000);
    cy.get("#box6").drag("#box106", {
      force: true,
    });
  });

  it("scrolling page", () => {
    cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");

    //go bottom
    cy.get(
      ":nth-child(2) > tbody > :nth-child(58) > :nth-child(1) > img"
    ).scrollIntoView({ duration: 3000 });
    cy.get(
      ":nth-child(2) > tbody > :nth-child(58) > :nth-child(1) > img"
    ).should("be.visible");

    //top back
    cy.get(
      ":nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img"
    ).scrollIntoView({ duration: 3000 });
    cy.get(
      ":nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img"
    ).should("be.visible");

    // go footer
    cy.get("#footer").scrollIntoView();
  });
});
