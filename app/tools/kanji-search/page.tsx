"use client";

import React, { useContext } from "react";
import { CharactersContext, LoadingContext } from "./layout";

// Next Imports
import Link from "next/link";

// Local Imports
import { KanjiCharacter } from "@/services/dictionaries/kanjidic";
import Japanese from "@/components/typography/Japanese";

/*
  Loading Skeleton
*/

// The loading skeleton, it will loop a skeleton animation. Used to show that the search is currently underway
const CharacterDisplayLoading = () => {
  return (
    <>
      {[...Array(5)].map((x, i) => (
        <div
          key={`loading ${i}`}
          className="mb-4 h-40 w-40 animate-pulse bg-gray-200 dark:bg-gray-900"
        />
      ))}
    </>
  );
};

/*
  Character Display Stuffs
*/

interface CharacterDisplayProps {
  character: KanjiCharacter;
}

// Used to display the characters returned from the search
const CharacterDisplay = ({ character }: CharacterDisplayProps) => {
  // Don't display anything if character doesn't exist
  if (!character) {
    return null;
  }

  // Create a string array filled with the kanji's meaning
  const meanings: string[] = character.readingMeaning.groups.flatMap((group) =>
    group.meanings.map((m) => m.value),
  );

  return (
    <div className="relative mb-4">
      <Link
        href={`/tools/kanji-search/${character.literal}`}
        data-test="character-display"
        className="group relative flex h-40 w-40 cursor-pointer select-none flex-col items-center justify-center transition-opacity active:opacity-75"
      >
        <div className="text-main-title-dark dark:text-main-title-light group-hover:text-main-identity mb-2 text-7xl font-medium transition-all duration-75 ease-in-out group-active:scale-95">
          <Japanese>{character.literal}</Japanese>
        </div>
        <div className="w-full truncate text-center">{meanings.join(", ")}</div>
        <div className="hover:text-main-identity absolute bottom-1 right-1 opacity-0 transition-opacity duration-75 ease-in-out hover:underline group-hover:opacity-100">
          View
        </div>
      </Link>
    </div>
  );
};

export default function Page() {
  const characters = useContext(CharactersContext);
  const loading = useContext(LoadingContext);

  return (
    <section className="flex flex-row flex-wrap justify-around gap-x-4">
      {loading ? (
        <CharacterDisplayLoading />
      ) : (
        characters?.map((character) => (
          <CharacterDisplay key={character.literal} character={character} />
        ))
      )}
    </section>
  );
}
