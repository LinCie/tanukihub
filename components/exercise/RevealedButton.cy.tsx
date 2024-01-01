import React from "react";
import RevealedButton from "./RevealedButton";

const testFunction = (state: boolean) => {
  return;
};

describe("<RevealedButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <RevealedButton setRevealed={testFunction} revealed data-test="test" />,
    );

    cy.getBySel("test")
      .contains("Reveal Answer")
      .should("have.data", "state", "revealed");
  });
});
