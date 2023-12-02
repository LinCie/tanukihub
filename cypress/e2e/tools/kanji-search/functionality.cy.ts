describe("Functionality Test", () => {
  beforeEach(() => {
    cy.visit("/tools/kanji-search");
  });

  it("should be able to type", () => {
    // Input data that should be typed
    const input = "test";

    // Get the search input
    cy.getBySel("search")
      .as("search")

      // Type the input data
      .type(input)

      // Assert the value of search to be equal with input data
      .should("have.value", input);
  });

  it("lang checkbox should be able to check", () => {
    // Get the language checkbox
    cy.getBySel("lang-checkbox").as("checkbox");

    // Find the default checked value and assert the value to be en
    cy.get("@checkbox")
      .find("[data-state='checked']")
      .should("have.value", "en");

    // Get japanese checkbox and click it
    cy.getBySel("jp-check").click();

    // Assert the checked checkbox to have value of jp
    cy.get("@checkbox")
      .find("[data-state='checked']")
      .should("have.value", "jp");
  });
});
