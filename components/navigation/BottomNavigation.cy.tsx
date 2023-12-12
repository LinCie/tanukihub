import React from "react";
import BottomNavigation from "./BottomNavigation";

describe("<BottomNavigation />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BottomNavigation className="test" data-test="test">
        test
      </BottomNavigation>,
    );

    cy.getBySel("test").should("have.text", "test").and("have.class", "test");
  });
});
