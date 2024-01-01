import React from "react";
import Vocabulary from "./Vocabulary";
import VocabularyType from "./VocabularyType";

const vocabularies: VocabularyType[] = [
  {
    kanji: "test",
    searchFor: "test",
    reading: "test",
    meaning: "test",
  },
];

describe("<Vocabulary />", () => {
  it("renders", () => {
    cy.mount(<Vocabulary vocabularies={vocabularies} data-test="test" />);

    cy.getBySel("test").contains("test");
  });
});
