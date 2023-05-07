describe("CSSLOcator", () => {
  it("css locator", () => {
    cy.visit("http://automationpractice.pl/index.php");

    //cy.get("#search_query_top").type("T-Shirts");
    //cy.get(".search_query").type("T-Shirts");
    //cy.get("[name='search_query']").type("T-Shirts");
    cy.get(".search_query[name='search_query']").type("T-Shirts");

    cy.get("[name='submit_search']").click();

    cy.get(".lighter").contains("T-Shirts");
  });
});
