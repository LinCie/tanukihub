import React from "react";
import IconButton from "./IconButton";

describe("<IconButton />", () => {
  it("renders", () => {
    cy.mount(
      <IconButton className="test" data-test="test" icon={<div>test</div>} />,
    );

    cy.getBySel("test").should("have.text", "test").and("have.class", "test");
  });

  it("handles tailwind conflict correctly", () => {
    cy.mount(
      <IconButton className="p-10" data-test="test" icon={<div>test</div>} />,
    );

    cy.getBySel("test")
      .should("have.class", "p-10")
      .and("not.have.class", "p-3");
  });
});
