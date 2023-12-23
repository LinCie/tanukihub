describe("Layout Testing", () => {
  // Visit kanji-search link
  beforeEach(() => {
    cy.visit("tools/kanji-search");
  });

  describe("Sidebar", () => {
    it("should show correct current navigation", () => {
      cy.getBySel("tools-root").should("have.data", "state", "open");

      cy.getBySel("kanji-search-link").should("have.data", "current", "page");
    });
  });
});

describe("Navigation Testing", () => {
  it("Should be able to navigate", () => {
    cy.visit("/");

    cy.getBySel("tools-root").click().should("have.data", "state", "open");

    cy.getBySel("kanji-search-link").click();

    cy.url().should("include", "/kanji-search");

    cy.getBySel("page-title").contains("Kanji Search");
  });
});

describe("Functionality Test", () => {
  beforeEach(() => {
    cy.visit("/tools/kanji-search");
  });

  describe("Search input", () => {
    it("should be able to type", () => {
      // Input data that should be typed
      const input = "test";

      // Get the search input
      cy.getBySel("search")
        .as("search")

        // Type the input data
        .clear()
        .type(input)

        // Assert the value of search to be equal with input data
        .should("have.value", input);
    });
  });

  describe("Language Checkbox", () => {
    beforeEach(() => {
      // Get the language checkbox
      cy.getBySel("lang-checkbox").as("checkbox");
    });

    describe("Default Language", () => {
      it("should be english", () => {
        // Find the default checked value and assert the value to be en
        cy.get("@checkbox")
          .find("[data-state='checked']")
          .should("have.value", "en");
      });
    });

    describe("Language Change", () => {
      it("should be able to check", () => {
        // Get japanese checkbox and click it
        cy.getBySel("jp-check").click();

        // Assert the checked checkbox to have value of jp
        cy.get("@checkbox")
          .find("[data-state='checked']")
          .should("have.value", "jp");
      });
    });
  });

  describe("By Checkbox", () => {
    // Assert by checkbox to be initially invisible
    it("initial state should not be visible", () => {
      cy.getBySel("by-checkbox").should("not.be.visible");
    });

    // After Japanese checkbox has been checked
    describe("After Japanese checkbox has been checked", () => {
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

  describe("Main Functionality", () => {
    beforeEach(() => {
      // Intercept GET API Request to use later
      cy.intercept("GET", "/api/kanji*").as("kanjiAPI");

      // Type Raccoon into the search input
      cy.getBySel("search").clear().type("Raccoon");

      // Click the submit button
      cy.getBySel("submit").click();

      // Wait for API to send the result
      cy.wait("@kanjiAPI");
    });

    it("should be able to search", () => {
      // Assert Character display to be visible
      cy.getBySel("character-display").should("be.visible");
    });

    describe("Kanji Information Testing", () => {
      beforeEach(() => {
        cy.getBySel("character-display").first().click();
        cy.wait("@kanjiAPI");
      });

      it("should be able to navigate to kanji information", () => {
        cy.url().then((url) => {
          const slug = url.split("/").pop();
          expect(slug).to.not.eq("kanji-search");
        });
      });

      it("should be able to show the information", () => {
        cy.getBySel("kanji-information").should("be.visible");
      });

      it("should be able to navigate back", () => {
        cy.getBySel("search").clear().type("Raccoon");
        cy.getBySel("submit").click();
        cy.wait("@kanjiAPI");
        cy.url().then((url) => {
          const slug = url.split("/").pop();
          expect(slug).to.eq("kanji-search");
        });
      });
    });
  });
});
