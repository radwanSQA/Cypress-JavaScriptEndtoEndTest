describe("Mytest", () => {
  it("fixuture demo test", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    // cy.get("input[placeholder='Username']").type("Admin");
    // cy.get("input[placeholder='Password']").type("admin123");
    // cy.get("button[type='submit']").click();

    // cy.get("aside[class='oxd-sidepanel'] li:nth-child(2)").click();

    // cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should(
    //   "have.text",
    //   "PIM"
    // );

    cy.fixture("orangehrm").then((data) => {
      cy.get("input[placeholder='Username']").type(data.username);
      cy.get("input[placeholder='Password']").type(data.password);
      cy.get("button[type='submit']").click();

      cy.get("aside[class='oxd-sidepanel'] li:nth-child(2)").click();

      cy.get(
        ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
      ).should("have.text", data.expected);
    });
  });
});
