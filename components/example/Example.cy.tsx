import React from "react";
import Example from "./Example";
import ExampleType from "./ExampleType";

const examples: ExampleType[] = [
  {
    kana: "test",
    romaji: "test",
    translation: "test",
  },
];

describe("<Example />", () => {
  it("renders", () => {
    cy.mount(<Example examples={examples} data-test="test" />);

    cy.getBySel("test").contains("test");
  });
});
