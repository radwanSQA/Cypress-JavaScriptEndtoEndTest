describe("my first test", () => {
  it("Verift title-positive", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
  });

  it("Verift title-negative", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM123");
  });
});
