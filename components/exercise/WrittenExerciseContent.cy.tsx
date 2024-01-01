import React from "react";
import WrittenExerciseContent from "./WrittenExerciseContent";
import WrittenExerciseType from "./WrittenExerciseType";

const exercise: WrittenExerciseType = {
  question: "test",
  answer: "test",
};

describe("<WrittenExerciseContent />", () => {
  it("renders", () => {
    cy.mount(
      <WrittenExerciseContent exercise={exercise} revealed data-test="test" />,
    );

    cy.getBySel("test").contains("test");
  });
});
