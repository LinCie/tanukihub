import React from "react";
import Paragraph from "./Paragraph";

describe("<Japanese />", () => {
  it("renders", () => {
    cy.mount(
      <Paragraph className="test" data-test="test">
        test
      </Paragraph>,
    );

    cy.getBySel("test").should("have.text", "test").and("have.class", "test");
  });
});
