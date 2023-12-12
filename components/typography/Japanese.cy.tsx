import React from "react";
import Japanese from "./Japanese";

describe("<Japanese />", () => {
  it("renders", () => {
    cy.mount(
      <Japanese className="test" data-test="test">
        test
      </Japanese>,
    );

    cy.getBySel("test").should("have.text", "test").and("have.class", "test");
  });
});
