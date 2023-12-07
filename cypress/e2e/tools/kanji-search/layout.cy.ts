describe("Navigation Testing", () => {
  // Visit kanji-search link
  beforeEach(() => {
    cy.visit("tools/kanji-search");
  });

  describe("Sidebar", () => {
    it("should show correct current navigation", () => {
      cy.getBySel("tools-root").should("have.data", "state", "open");

      cy.getBySel("kanji-search-link")
        .should("have.class", "font-medium")
        .and("have.class", "text-[#CC3E3E]")
        .and("have.class", "dark:text-white");
    });
  });
});

describe("Header Testing", () => {
  beforeEach(() => {
    cy.visit("tools/kanji-search");
  });

  it("has correct header", () => {
    cy.getBySel("page-title").contains("Kanji Search");
  });
});