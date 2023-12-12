import React from "react";
import PageTitle from "./PageTitle";

describe("<Japanese />", () => {
  it("renders", () => {
    cy.mount(
      <PageTitle className="test" data-test="test">
        test
      </PageTitle>,
    );

    cy.getBySel("test").should("have.text", "test").and("have.class", "test");
  });
});
