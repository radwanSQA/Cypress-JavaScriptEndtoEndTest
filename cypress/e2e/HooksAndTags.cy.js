describe("MyTestSuite", () => {
  before(() => {
    cy.log("******** Launch app *******");
  });

  after(() => {
    cy.log("******** close app *******");
  });

  beforeEach(() => {
    cy.log("******** login *******");
  });

  afterEach(() => {
    cy.log("******** lagout *******");
  });

  it("search", () => {
    cy.log("******** Searchibng*******");
  });

  it("Advanced search", () => {
    cy.log("******** Advanced Searchibng*******");
  });

  it("listing product", () => {
    cy.log("******** Listing product*******");
  });
});
