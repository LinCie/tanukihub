import React from "react";
import List from "./List";
import ListContent from "./ListContent";

describe("<List />", () => {
  it("renders for disc inside", () => {
    cy.mount(
      <List data-test="test" className="test" type="disc" position="inside">
        <ListContent>test</ListContent>
      </List>,
    );

    cy.getBySel("test")
      .should("have.text", "test")
      .and("have.class", "test")
      .and("have.class", "list-disc")
      .and("have.class", "list-inside");
  });

  it("renders for decimal outside", () => {
    cy.mount(
      <List data-test="test" className="test" type="decimal" position="outside">
        <ListContent>test</ListContent>
      </List>,
    );

    cy.getBySel("test")
      .should("have.text", "test")
      .and("have.class", "test")
      .and("have.class", "list-decimal")
      .and("have.class", "list-outside");
  });
});
