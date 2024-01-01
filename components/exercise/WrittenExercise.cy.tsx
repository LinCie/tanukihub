import React from "react";
import WrittenExercise from "./WrittenExercise";
import WrittenExerciseType from "./WrittenExerciseType";

const exercises: WrittenExerciseType[] = [
  {
    question: "test",
    answer: "test",
  },
];

describe("<WrittenExercise />", () => {
  it("renders", () => {
    cy.mount(<WrittenExercise exercises={exercises} data-test="test" />);

    cy.getBySel("test").contains("test");
  });
});
