describe("Check UI Element", () => {
  it("checking radio button", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.get("input#male").should("be.visible");
    cy.get("input#female").should("be.visible");

    cy.get("input#male").check().should("be.checked");
    cy.get("input#female").should("not.be.checked");

    cy.get("input#female").check().should("be.checked");
    cy.get("input#male").should("not.be.checked");
  });

  it("checking check button", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.get("input#monday").should("be.visible");

    //selecting single checkbox
    cy.get("input#monday").check().should("be.checked");

    cy.get("input#monday").uncheck().should("not.be.checked");

    cy.get("input.form-check-input[type='checkbox']")
      .check()
      .should("be.checked");
    cy.get("input.form-check-input[type='checkbox']")
      .uncheck()
      .should("not.be.checked");

    cy.get("input.form-check-input[type='checkbox']")
      .first()
      .check()
      .should("be.checked");
    cy.get("input.form-check-input[type='checkbox']").last().check();
  });
});
