"use client";

import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import instance from "@/components/api/api";
import PageTitle from "@/components/typography/PageTitle";
import { KanjiCharacter } from "@/components/dictionaries/kanjidic";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";

interface Inputs {
  kanji: string;
}

interface ResponseData {
  character: KanjiCharacter;
}

interface SearchFormProps {
  setCharacter: (character: KanjiCharacter) => void;
  setLoading: (state: boolean) => void;
}

const SearchForm = ({ setCharacter, setLoading }: SearchFormProps) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    try {
      setLoading(true);
      const response = await instance.get(`/kanji?kanji=${inputs.kanji}`);
      const data: ResponseData = response.data;

      if (data.character) {
        setCharacter(data.character);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-4 flex rounded-md border-2 border-[#CC3E3E] dark:border-white md:mb-6 lg:mb-8"
    >
      <input
        {...register("kanji")}
        autoComplete="off"
        className="min-w-0 flex-1 bg-transparent px-2 focus:border-0 focus:outline-none dark:bg-transparent"
      />
      <button
        type="submit"
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </form>
  );
};

interface KanjIDisplayProps {
  character: KanjiCharacter;
}

const KanjIDisplay = ({ character }: KanjIDisplayProps) => {
  const meanings: string[] = character.readingMeaning.groups.flatMap((group) =>
    group.meanings.map((m) => m.value),
  );

  return (
    <div className="mb-5 lg:flex-[3]">
      <div id="kanji-character" className="mb-4 flex justify-center">
        <div id="kanji-character-container" className="h-32 w-32">
          <div id="kanji-character-text" className="select-none text-9xl">
            {character.literal}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div id="kanji-meaning" className="text-center text-2xl lg:text-xl">
          {meanings.join(", ")}
        </div>
      </div>
    </div>
  );
};

interface ReadingDisplayProps {
  character: KanjiCharacter;
}

const ReadingDisplay = ({ character }: ReadingDisplayProps) => {
  const kunyomi: string[] = character.readingMeaning.groups
    .flatMap((group) => group.readings.filter((r) => r.type === "ja_kun"))
    .map((r) => r.value);

  const onyomi: string[] = character.readingMeaning.groups
    .flatMap((group) => group.readings.filter((r) => r.type === "ja_on"))
    .map((r) => r.value);

  return (
    <div id="reading-display" className="mb-5 flex flex-1 flex-col">
      <h2 className="mb-2 text-lg font-bold">Readings</h2>
      <div id="kunyomi-display" className="mb-1 flex gap-2">
        <div>Kun:</div>
        <div>{kunyomi.join("、 ")}</div>
      </div>
      <div id="onyomi-display" className="flex gap-2">
        <div>On:</div>
        <div>{onyomi.join("、 ")}</div>
      </div>
    </div>
  );
};

interface MiscDisplayProps {
  character: KanjiCharacter;
}

const MiscDisplay = ({ character }: MiscDisplayProps) => {
  const grade: number = character.misc.grade;
  const level: number = character.misc.jlptLevel + 1;

  return (
    <div id="misc-display" className="flex-1">
      <h2 className="mb-2 text-lg font-bold">Miscellaneous</h2>
      {grade ? (
        <div className="mb-1 flex gap-2">
          <div>Taught in: </div>
          <div className="font-bold">Grade {grade.toString()}</div>
        </div>
      ) : null}
      {level ? (
        <div className="mb-1 flex gap-2">
          <div>JLPT Level: </div>
          <div className="font-bold">N{level.toString()}</div>
        </div>
      ) : null}
    </div>
  );
};

const CharacterDisplayLoading = () => {
  const springs = useSpring({
    loop: { reverse: true },
    from: { opacity: 1 },
    to: { opacity: 0.5 },
    config: { duration: 1000, tension: 120, friction: 14 },
  });

  return (
    <animated.section id="character-display-loading" style={springs} className="mb-10">
      <div id="top-display" className="flex flex-col lg:flex-row lg:gap-2">
        <div id="kanji-display" className="mb-5 flex flex-col lg:flex-[3]">
          <div className="mb-4 h-32 w-full bg-gray-200 dark:bg-gray-900 rounded" />
          <div className="h-16 w-full bg-gray-200 dark:bg-gray-900 rounded" />
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2 lg:flex-[7]">
          <div id="reading-display" className="mb-5 flex flex-1 flex-col">
            <div
              id="reading-title"
              className="mb-2 h-5 w-full bg-gray-200 dark:bg-gray-900 rounded"
            />
            <div
              id="reading-kunyomi"
              className="mb-1 h-10 w-full bg-gray-200 dark:bg-gray-900 rounded"
            />
            <div
              id="reading-onyomi"
              className="h-10 w-full bg-gray-200 dark:bg-gray-900 rounded"
            />
          </div>
          <div id="misc-display" className="flex flex-1 flex-col">
            <div
              id="misc-title"
              className="mb-2 h-5 w-full bg-gray-200 dark:bg-gray-900 rounded"
            />
            <div
              id="grade"
              className="mb-1 h-10 w-full bg-gray-200 dark:bg-gray-900 rounded"
            />
            <div
              id="jlpt"
              className="h-10 w-full bg-gray-200 dark:bg-gray-900 rounded"
            />
          </div>
        </div>
      </div>
    </animated.section>
  );
};

interface CharacterDisplayProps {
  character: KanjiCharacter | undefined;
  loading: boolean;
}

const CharacterDisplay = ({ character, loading }: CharacterDisplayProps) => {
  if (loading) {
    return <CharacterDisplayLoading />;
  }

  if (!character) {
    return null;
  }

  return (
    <section id="character-display" className="mb-10">
      <div id="top-display" className="flex flex-col lg:flex-row lg:gap-2">
        <KanjIDisplay character={character} />
        <div className="flex flex-col sm:flex-row sm:gap-2 lg:flex-[7]">
          <ReadingDisplay character={character} />
          <MiscDisplay character={character} />
        </div>
      </div>
    </section>
  );
};

export default function KanjiSearch() {
  const [character, setCharacter] = useState<KanjiCharacter>();
  const [loading, setLoading] = useState(false);

  const handleCharacter = (character: KanjiCharacter) => {
    setCharacter(character);
  };

  const handleLoading = (state: boolean) => {
    setLoading(state);
  };

  return (
    <div id="kanji-search">
      <PageTitle>Kanji Search</PageTitle>
      <SearchForm setCharacter={handleCharacter} setLoading={handleLoading} />
      <CharacterDisplay loading={loading} character={character} />
      <div id="attribution">
        <p>
          TanukiHub's kanji search uses{" "}
          <Link
            href="https://www.edrdg.org/wiki/index.php/KANJIDIC_Project"
            target="_blank"
            className="font-bold text-[#CC3E3E] hover:underline dark:text-white"
          >
            Kanjidic
          </Link>{" "}
          that has been{" "}
          <Link
            href="https://github.com/scriptin/jmdict-simplified"
            target="_blank"
            className="font-bold text-[#CC3E3E] hover:underline dark:text-white"
          >
            Simplified
          </Link>
        </p>
      </div>
    </div>
  );
}
