describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page", () => {
    cy.get("h1").contains("Great coffee with a conscience");
  });

  it("navigates to the product page", () => {
    cy.get('a[href="/products"]').eq(0).click();
    cy.url().should("include", "/products");
    cy.get("h1").contains(/Our Coffee/i);
  });

  it("navigates to the values page", () => {
    cy.get('a[href="/values"]').eq(0).click();
    cy.url().should("include", "/values");
    cy.get("h1").contains(/Values/i);
  });

  it("navigates to the cell-line page", () => {
    cy.get('a[href="/cell-line"]').eq(0).click();
    cy.url().should("include", "/cell-line");
    cy.get("h1").contains(/Cell Lines/i);
  });
});
