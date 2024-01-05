describe("Layout Testing", () => {
  // Visit the page link
  beforeEach(() => {
    cy.visit("/introductory/intro-to-hiragana");
  });

  describe("Sidebar", () => {
    it("should show correct current navigation", () => {
      cy.getBySel("introductory-root").should("have.data", "state", "open");

      cy.getBySel("intro-to-hiragana-link").should(
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
    cy.getBySel("introductory-root")
      .click()
      .should("have.data", "state", "open");

    // Click the page link
    cy.getBySel("intro-to-hiragana-link").click();

    // Check url change
    cy.url().should("include", "/intro-to-hiragana");

    // Check the header to show correct page
    cy.getBySel("page-title").contains("Introduction to Hiragana");
  });
});
