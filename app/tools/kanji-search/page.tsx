"use client";

import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import instance from "@/components/api/api";
import PageTitle from "@/components/typography/PageTitle";
import { KanjiCharacter } from "@/components/dictionaries/kanjidic";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

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
      className="mb-4 flex rounded-md border-2 border-[#CC3E3E] dark:border-white"
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
    <div className="mb-5">
      <div id="kanji-character" className="mb-4 flex justify-center">
        <div id="kanji-character-container" className="h-32 w-32">
          <div id="kanji-character-text" className="select-none text-9xl">
            {character.literal}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div id="kanji-meaning" className="text-center text-3xl">
          {meanings.join(", ")}
        </div>
      </div>
    </div>
  );
};

interface ReadingDisplayProps {
  character: KanjiCharacter
}

const ReadingDisplay = ({ character }: ReadingDisplayProps) => {
  const kunyomi: string[] = character.readingMeaning.groups
    .flatMap((group) => group.readings.filter((r) => r.type === "ja_kun"))
    .map((r) => r.value);

  const onyomi: string[] = character.readingMeaning.groups
    .flatMap((group) => group.readings.filter((r) => r.type === "ja_on"))
    .map((r) => r.value);

  return (
    <div id="reading-display" className="flex flex-1 flex-col">
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

interface CharacterDisplayProps {
  character: KanjiCharacter | undefined;
  loading: boolean;
}

const CharacterDisplay = ({ character, loading }: CharacterDisplayProps) => {
  if (!character) {
    return null;
  }

  if (loading) {
    return null;
  }

  return (
    <section id="character-display">
      <div id="top-display" className="flex flex-col">
        <KanjIDisplay character={character} />
        <div className="flex flex-col">
          <ReadingDisplay character={character} />
          <div className="flex-1"></div>
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
    </div>
  );
}
