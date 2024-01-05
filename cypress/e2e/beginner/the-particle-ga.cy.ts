describe("Layout Testing", () => {
  // Visit the page link
  beforeEach(() => {
    cy.visit("/beginner/the-particle-ga");
  });

  describe("Sidebar", () => {
    it("should show correct current navigation", () => {
      cy.getBySel("beginner-root").should("have.data", "state", "open");

      cy.getBySel("the-particle-ga-link").should(
        "have.data",
        "current",
        "page",
      );
    });
  });
});

describe("Navigation Testing", () => {
  it("Should be able to navigate", () => {
    // Visit the index of the webpage
    cy.visit("/");

    // Click the root and check whether it's open or not
    cy.getBySel("beginner-root").click().should("have.data", "state", "open");

    // Click the page link
    cy.getBySel("the-particle-ga-link").click();

    // Check url change
    cy.url().should("include", "/the-particle-ga");

    // Check the header to show correct page
    cy.getBySel("page-title").contains("The Particle 「が」");
  });
});
