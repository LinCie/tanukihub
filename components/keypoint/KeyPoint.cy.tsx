import React from "react";
import KeyPoint from "./KeyPoint";

describe("<KeyPoint />", () => {
  it("renders", () => {
    cy.mount(<KeyPoint data-test="test">test</KeyPoint>);

    cy.getBySel("test").contains("test");
  });
});
