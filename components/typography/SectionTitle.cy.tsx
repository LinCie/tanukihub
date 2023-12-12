import React from "react";
import SectionTitle from "./SectionTitle";

describe("<Japanese />", () => {
  it("renders", () => {
    cy.mount(
      <SectionTitle className="test" data-test="test">
        test
      </SectionTitle>,
    );

    cy.getBySel("test").should("have.text", "test").and("have.class", "test");
  });
});
