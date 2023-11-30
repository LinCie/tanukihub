describe("Navigation Testing", () => {
  // Visit kanji-search link
  beforeEach(() => {
    cy.visit("tools/kanji-search");
  });

  it("shows correct current navigation", () => {
    const navRoot = cy.get("#tools-root");

    navRoot.should("have.data", "state", "open");

    const navLink = cy.get("#kanji-search-link");

    navLink
      .should("have.class", "font-medium")
      .and("have.class", "text-[#CC3E3E]")
      .and("have.class", "dark:text-white");
  });
});

describe("Header Testing", () => {
  beforeEach(() => {
    cy.visit("tools/kanji-search");
  });

  it("has correct header", () => {
    const header = cy.get("#page-title");

    header.contains("Kanji Search");
  });
});
