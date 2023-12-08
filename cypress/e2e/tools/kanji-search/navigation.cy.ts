describe("Navigation Testing", () => {
  it("Should be able to navigate", () => {
    cy.visit("/")
  
    cy.getBySel("tools-root")
      .click()
      .should("have.data", "state", "open")
  
    cy.getBySel("kanji-search-link")
      .click()
  
    cy.url().should("include", "/kanji-search")
  
    cy.getBySel("page-title").contains("Kanji Search");
  })
})