import React from "react";
import VocabularyContent from "./VocabularyContent";
import VocabularyType from "./VocabularyType";

const vocabulary: VocabularyType = {
  kanji: "test",
  searchFor: "test",
  reading: "test",
  meaning: "test",
};

describe("<VocabularyContent />", () => {
  it("renders", () => {
    cy.mount(<VocabularyContent vocabulary={vocabulary} data-test="test" />);

    cy.getBySel("test").contains("test");
  });
});
