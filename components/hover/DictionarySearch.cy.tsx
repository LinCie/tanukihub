import DictionarySearch from "./DictionarySearch";

describe("<DictionarySearch />", () => {
  beforeEach(() => {
    cy.mount(<DictionarySearch searchFor="日本語">TEST</DictionarySearch>);
    cy.getBySel("dictionary-tooltip").as("component");
  });

  it("renders", () => {
    cy.get("@component").should("have.text", "TEST");
  });

  describe("tooltip interaction", () => {
    beforeEach(() => {
      cy.get("@component").realHover().wait(350);
    });

    it("tooltip opens", () => {
      cy.get("@component").should("have.data", "state", "open");
    });
  });
});
