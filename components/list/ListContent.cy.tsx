import React from "react";
import ListContent from "./ListContent";

describe("<ListContent />", () => {
  it("renders", () => {
    cy.mount(
      <ListContent className="test" data-test="test">
        test
      </ListContent>,
    );

    cy.getBySel("test").should("have.text", "test").and("have.class", "test");
  });
});
