describe("mysuite", () => {
  it("Capture screenshot & videso", () => {
    cy.visit("https://demo.opencart.com/");
    // cy.viewport(1280, 720);
    // cy.screenshot("homepage");
    // cy.wait(5000);
    //cy.get("img[title='Your Store']").screenshot("logo");

    cy.get("li:nth-child(7) a:nth-child(1)").click();
    cy.get("div[id='content'] h2").should("have.text", "Tablets");
  });
});
