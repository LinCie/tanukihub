"use client";

import { ComponentPropsWithoutRef, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import List from "@/components/list/List";
import WrittenExerciseType from "@/components/exercise/WrittenExerciseType";
import WrittenExerciseContent from "@/components/exercise/WrittenExerciseContent";
import RevealedButton from "@/components/exercise/RevealedButton";

interface Props extends ComponentPropsWithoutRef<"div"> {
  exercises: WrittenExerciseType[];
}

export default function WrittenExercise({
  className,
  exercises,
  ...props
}: Props) {
  const [revealed, setRevealed] = useState(false);

  const handleRevealed = (state: boolean) => {
    setRevealed(state);
  };

  return (
    <div className={cn("mb-2 sm:mb-3", className)} {...props}>
      <div className="mb-2 text-sm sm:mb-3 sm:text-base">
        Note: You're encouraged to use dictionaries such as{" "}
        <Link
          href="https://jisho.org/"
          target="_blank"
          className="font-medium text-main-identity underline dark:text-main-light"
        >
          Jisho
        </Link>{" "}
        to look up several vocabularies in this exercise
      </div>
      <List type="decimal" position="outside" className="mx-7">
        {exercises.map((exercise) => (
          <WrittenExerciseContent
            key={exercise.question}
            exercise={exercise}
            revealed={revealed}
          />
        ))}
      </List>
      <RevealedButton setRevealed={handleRevealed} revealed={revealed} />
    </div>
  );
}
