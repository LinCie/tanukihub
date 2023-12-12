import React from "react";
import BottomNavigationLink from "./BottomNavigationLink";

describe("<BottomNavigationLink />", () => {
  it("left link renders", () => {
    cy.mount(
      <BottomNavigationLink
        className="test"
        data-test="test"
        href="https://test.com"
      >
        test
      </BottomNavigationLink>,
    );

    cy.getBySel("test")
      .should("have.text", "test")
      .and("have.class", "test")
      .and("have.attr", "href", "https://test.com");
  });

  it("right link renders", () => {
    cy.mount(
      <BottomNavigationLink
        className="test"
        data-test="test"
        href="https://test.com"
        right
      >
        test
      </BottomNavigationLink>,
    );

    cy.getBySel("test")
      .should("have.text", "test")
      .and("have.class", "test")
      .and("have.attr", "href", "https://test.com");
  });
});
