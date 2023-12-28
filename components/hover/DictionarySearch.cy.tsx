import DictionarySearch from "./DictionarySearch";

describe("<DictionarySearch />", () => {
  beforeEach(() => {
    cy.mount(<DictionarySearch searchFor="日本語">TEST</DictionarySearch>);
    cy.getBySel("dictionary-popover").as("component");
  });

  it("renders", () => {
    cy.get("@component").should("have.text", "TEST");
  });

  describe("tooltip interaction", () => {
    beforeEach(() => {
      cy.get("@component").click();
    });

    it("tooltip opens", () => {
      cy.get("@component").should("have.data", "state", "open");
    });

    it("tooltip closes", () => {
      cy.get("@component")
        .click()
        .should("have.data", "state", "closed");
    });
  });
});
