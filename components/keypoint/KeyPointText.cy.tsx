import React from "react";
import KeyPointText from "./KeyPointText";

describe("<KeyPointText />", () => {
  it("renders", () => {
    cy.mount(<KeyPointText data-test="test">test</KeyPointText>);

    cy.getBySel("test").contains("test");
  });
});
