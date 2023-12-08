describe("Layout Testing", () => {
  // Visit the page link
  beforeEach(() => {
    cy.visit("introductory/intro-to-japanese");
  });

  describe("Sidebar", () => {
    it("should show correct current navigation", () => {
      cy.getBySel("introductory-root").should("have.data", "state", "open");

      cy.getBySel("intro-to-japanese-link")
        .should("have.data", "current", "page")
    });
  });
});
