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

  it("should be able to check", () => {
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

  // Assert by checkbox to be initially invisible
  it("initially should not be visible", () => {
    cy.getBySel("by-checkbox").should("not.be.visible");
  });

  // further by checkbox test
  describe("by Checkbox Test", () => {
    beforeEach(() => {
      // Click japanese lang check
      cy.getBySel("jp-check").click();

      // get by checkbox
      cy.getBySel("by-checkbox").as("checkbox");
    });

    // Assert by checkbox to be visible
    it("should be visible", () => {
      cy.get("@checkbox").should("be.visible");
    });

    // by checkbox should be able to be checked
    it("should be able to check", () => {
      // Find the default checked value an assert it to be kanji
      cy.get("@checkbox")
        .find("[data-state='checked']")
        .should("have.value", "kanji");

      // Click kana checkbox
      cy.getBySel("kana-check").click();

      // Assert the checked checkbox to have value of kana
      cy.get("@checkbox")
        .find("[data-state='checked']")
        .should("have.value", "kana");
    });
  });
});
