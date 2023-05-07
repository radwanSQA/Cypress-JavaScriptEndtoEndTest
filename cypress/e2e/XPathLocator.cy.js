describe("XPathLocator", () => {
  it("find no of product", () => {
    cy.visit("http://automationpractice.pl/index.php");
    cy.xpath("//ul[@id='blockbestsellers']/li").should("have.length", 6);
  });

  it("chained xpath", () => {
    cy.visit("http://automationpractice.pl/index.php");
    cy.xpath("//ul[@id='blockbestsellers']")
      .xpath("./li")
      .should("have.length", 6);
  });
});
