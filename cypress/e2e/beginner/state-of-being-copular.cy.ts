describe("Layout Testing", () => {
  // Visit the page link
  beforeEach(() => {
    cy.visit("/beginner/state-of-being-copular");
  });

  describe("Sidebar", () => {
    it("should show correct current navigation", () => {
      cy.getBySel("beginner-root").should("have.data", "state", "open");

      cy.getBySel("state-of-being-copular-link").should(
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
    cy.getBySel("state-of-being-copular-link").click();

    // Check url change
    cy.url().should("include", "/state-of-being-copular");

    // Check the header to show correct page
    cy.getBySel("page-title").contains("State-of-Being: Copular Sentence");
  });
});
