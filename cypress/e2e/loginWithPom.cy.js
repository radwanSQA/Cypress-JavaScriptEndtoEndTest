import Login from "../PageObjects/LoginPage.js";

describe("pom", () => {
  it.skip("LoginTest", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
  });

  it("LoginTest Using Pom", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    const ln = new Login();
    ln.setUserName("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
    ln.verifyLogin();
  });
});
