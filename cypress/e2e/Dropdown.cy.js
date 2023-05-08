describe("handle dropdowns", () => {
  it.skip("Dropdown with select", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.get(".custom-select").select("Turkey").should("have.value", "3");
  });

  it.skip("Dropdown with select 2", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click();
    cy.get(".select2-search__field").type("Italy").type("{enter}");
    cy.get("#select2-billing_country-container").should("have.text", "Italy");
  });

  it("Auto suggest Dropdown", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("Dhaka");
    cy.get(".suggestion-title").contains("Dhaka").click();
  });

  it("Dynamic Dropdown", () => {
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").type("Cypress");
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() == "cypress college canada") {
        cy.wrap($el).click();
      }
    });
    cy.get("#APjFqb").should("have.value", "cypress college canada");
  });
});
