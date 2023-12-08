describe("Navigation Testing", () => {
  it("Should be able to navigate", () => {
    // Visit the index of the webpage
    cy.visit("/")
  
    // Click the root and check whether it's open or not
    cy.getBySel("introductory-root")
      .click()
      .should("have.data", "state", "open")
  
    // Click the link
    cy.getBySel("intro-to-japanese-link")
      .click()
  
    // Check url change
    cy.url().should("include", "/intro-to-japanese")
  
    // Check the header to show correct page
    cy.getBySel("page-title").contains("Introduction to Japanese");
  })
})