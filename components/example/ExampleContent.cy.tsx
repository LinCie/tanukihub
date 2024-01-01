import React from "react";
import ExampleContent from "./ExampleContent";
import ExampleType from "./ExampleType";

const example: ExampleType = {
  kana: "test",
  romaji: "test",
  translation: "test",
};

describe("<ExampleContent />", () => {
  it("renders", () => {
    cy.mount(<ExampleContent example={example} data-test="test" />);

    cy.getBySel("test").contains("test");
  });
});
