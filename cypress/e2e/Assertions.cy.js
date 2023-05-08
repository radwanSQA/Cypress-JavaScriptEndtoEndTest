describe("Assertion demo", () => {
  it("Implict Assertion", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // cy.url().should("include", "orangehrmlive.com");
    // cy.url().should(
    //   "eq",
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    // );
    // cy.url().should("contain", "orangehrm");

    cy.url()
      .should("include", "orangehrmlive.com")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrm")
      .and("not.contain", "greenhrm");

    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    cy.get(".orangehrm-login-branding > img").should("be.visible"); // check logo visible or exits
    cy.get(".orangehrm-login-branding > img").should("exist");

    cy.xpath("//a").should("have.length", "5"); // check no length

    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Username']").should("have.value", "Admin");
  });

  it("explict assertion", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("input[placeholder='Username").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    let expectedName = "xyz";

    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text();
      expect(actName).to.equal(expectedName);

      assert.equal(actName, expectedName);
      assert.notEqual(actName, expectedName);
    });
  });
});
