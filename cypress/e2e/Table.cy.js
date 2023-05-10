describe("Handle Table", () => {
  beforeEach("login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get("button[type='submit']").click();

    cy.get(".btn-close").click();

    cy.get("#menu-customer>a").click();

    cy.get("#menu-customer>ul>li:first-child").click();
  });

  it.skip("number of rows and column", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should(
      "have.length",
      "10"
    );
    cy.get(
      "table[class='table table-bordered table-hover']>thead>tr>td"
    ).should("have.length", "7");
  });

  it.skip("check cell column specific row & col", () => {
    cy.get(
      "table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)"
    ).contains("princytrainings4@gmail.com");
  });

  it.skip("Read all the rows & col data in first page", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });

  it("Pagination", () => {
    // let totalPages;
    // cy.get(".col-sm-6.text-end").then((e) => {
    //   let mytext = e.text();
    //   totalPages = mytext.substring(
    //     mytext.indexOf("(") + 1,
    //     mytext.indexOf("Pages") - 1
    //   );
    //   cy.log("Total num of pages" + totalPages);
    // });

    let totalPages = 5;
    for (let p = 1; p <= totalPages; p++) {
      if (totalPages > 1) {
        cy.log("Active page" + p);
        cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
        cy.wait(3000);
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
          ($row, index, $rows) => {
            cy.wrap($row).within(() => {
              cy.get("td:nth-child(3)").then((e) => {
                cy.log(e.text());
              });
            });
          }
        );
      }
    }
  });
});
