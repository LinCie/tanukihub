import React from "react";
import Bold from "./Bold";

describe("<Bold />", () => {
  it("renders", () => {
    cy.mount(
      <Bold data-test="test" className="test">
        test
      </Bold>,
    );

    cy.getBySel("test").should("have.text", "test").and("have.class", "test");
  });
});
