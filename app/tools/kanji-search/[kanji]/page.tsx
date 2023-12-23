"use client";

import { useEffect, useState } from "react";

import Japanese from "@/components/typography/Japanese";
import instance from "@/services/api/api";
import { KanjiCharacter } from "@/services/dictionaries/kanjidic";

interface ResponseData {
  characters: KanjiCharacter[];
}

/* 
  KanjiDisplay component stuffs
*/

// The props that KanjIDisplay use
interface KanjIDisplayProps {
  character: KanjiCharacter;
}

// Used to display the kanji alongside its meaning
const KanjIDisplay = ({ character }: KanjIDisplayProps) => {
  // Create a string array filled with the kanji's meaning
  const meanings: string[] = character.readingMeaning.groups.flatMap((group) =>
    group.meanings.map((m) => m.value),
  );

  return (
    <div className="mb-5 lg:flex-[3]">
      <div id="kanji-character" className="mb-4 flex justify-center">
        <div id="kanji-character-container" className="h-32 w-32">
          <div
            data-test="kanji-information"
            id="kanji-character-text"
            className="select-none text-9xl"
          >
            <Japanese>{character.literal}</Japanese>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div
          id="kanji-meaning"
          className="text-center text-2xl lg:text-xl"
        >
          {meanings.join(", ")}
        </div>
      </div>
    </div>
  );
};

/* 
  ReadingDisplay stuffs
*/

// ReadingDisplay props
interface ReadingDisplayProps {
  character: KanjiCharacter;
}

// Used to display the reading of a kanji
const ReadingDisplay = ({ character }: ReadingDisplayProps) => {
  // Create an array string filled with the kanji's kunyomi reading
  const kunyomi: string[] = character.readingMeaning.groups
    .flatMap((group) => group.readings.filter((r) => r.type === "ja_kun"))
    .map((r) => r.value);

  // Create an array string filled with the kanji's onyomi reading
  const onyomi: string[] = character.readingMeaning.groups
    .flatMap((group) => group.readings.filter((r) => r.type === "ja_on"))
    .map((r) => r.value);

  return (
    <div id="reading-display" className="mb-5 flex flex-1 flex-col">
      <h2 className="mb-2 text-lg font-bold">Readings</h2>
      <div id="kunyomi-display" className="mb-1 flex gap-2">
        <div>Kun:</div>
        <Japanese>
          <div>{kunyomi.join("、 ")}</div>
        </Japanese>
      </div>
      <div id="onyomi-display" className="flex gap-2">
        <div>On:</div>
        <Japanese>
          <div>{onyomi.join("、 ")}</div>
        </Japanese>
      </div>
    </div>
  );
};

/*
  MiscDisplay stuffs
*/

// MiscDisplay Props
interface MiscDisplayProps {
  character: KanjiCharacter;
}

// Used to display miscellaneous stuffs about the kanji
const MiscDisplay = ({ character }: MiscDisplayProps) => {
  const grade: number = character.misc.grade;
  // Add 1 because somehow the level starts with 0
  const level: number = character.misc.jlptLevel + 1;

  return (
    <div id="misc-display" className="flex-1">
      <h2 className="mb-2 text-lg font-bold">Miscellaneous</h2>
      {grade && (
        <div className="mb-1 flex gap-2">
          <div>Taught in: </div>
          <div className="font-bold">Grade {grade.toString()}</div>
        </div>
      )}
      {level && (
        <div className="mb-1 flex gap-2">
          <div>JLPT Level: </div>
          <div className="font-bold">N{level.toString()}</div>
        </div>
      )}
    </div>
  );
};

/*
  Loading Skeleton
*/

// The loading skeleton, it will loop a skeleton animation. Used to show that the search is currently underway
const CharacterDisplayLoading = () => {
  return (
    <section id="character-display-loading" className="animate-pulse">
      <div id="top-display" className="flex flex-col lg:flex-row lg:gap-2">
        <div id="kanji-display" className="mb-5 flex flex-col lg:flex-[3]">
          <div className="mb-4 h-32 w-full rounded bg-gray-200 dark:bg-gray-900" />
          <div className="h-16 w-full rounded bg-gray-200 dark:bg-gray-900" />
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2 lg:flex-[7]">
          <div id="reading-display" className="mb-5 flex flex-1 flex-col">
            <div
              id="reading-title"
              className="mb-2 h-5 w-full rounded bg-gray-200 dark:bg-gray-900"
            />
            <div
              id="reading-kunyomi"
              className="mb-1 h-10 w-full rounded bg-gray-200 dark:bg-gray-900"
            />
            <div
              id="reading-onyomi"
              className="h-10 w-full rounded bg-gray-200 dark:bg-gray-900"
            />
          </div>
          <div id="misc-display" className="flex flex-1 flex-col">
            <div
              id="misc-title"
              className="mb-2 h-5 w-full rounded bg-gray-200 dark:bg-gray-900"
            />
            <div
              id="grade"
              className="mb-1 h-10 w-full rounded bg-gray-200 dark:bg-gray-900"
            />
            <div
              id="jlpt"
              className="h-10 w-full rounded bg-gray-200 dark:bg-gray-900"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* 
  CharacterDisplay stuffs
*/

// CharacterDisplay props
interface CharacterDisplayProps {
  character: KanjiCharacter | undefined;
}

// Used to display the characters returned from the search
const CharacterDisplay = ({ character }: CharacterDisplayProps) => {
  // Don't display anything if character doesn't exist
  if (!character) {
    return null;
  }

  return (
    <div
      data-test="character-display"
      className="flex flex-col lg:flex-row lg:gap-2"
    >
      <KanjIDisplay character={character} />
      <div className="flex flex-col sm:flex-row sm:gap-2 lg:flex-[7]">
        <ReadingDisplay character={character} />
        <MiscDisplay character={character} />
      </div>
    </div>
  );
};

export default function Page({ params }: { params: { kanji: string } }) {
  const [character, setCharacter] = useState<KanjiCharacter>();

  const paramsData = {
    search: decodeURIComponent(params.kanji),
    lang: "jp",
    by: "kanji",
  };

  const fetchCharacter = async () => {
    try {
      const response = await instance.get("/kanji", { params: paramsData });
      const data: ResponseData = response.data;

      if (data.characters) {
        setCharacter(data.characters[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  if (!character) {
    return <CharacterDisplayLoading />;
  } else {
    return <CharacterDisplay character={character} />;
  }
}
