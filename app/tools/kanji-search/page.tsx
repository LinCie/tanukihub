"use client";

import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import instance from "@/components/api/api";
import PageTitle from "@/components/typography/PageTitle";
import { KanjiCharacter } from "@/components/dictionaries/kanjidic";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

// const dataMeanings: string[] =
//  data.character.readingMeaning.groups.flatMap((group) =>
//    group.meanings.map((m) => m.value),
//  );

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

  const meanings = character.readingMeaning.groups.flatMap((group) =>
    group.meanings.map((m) => m.value),
  );

  return (
    <section id="character-display">
      <div id="top-display" className="flex flex-col">
        <div id="kanji-character">
          <div className="select-none text-center text-9xl">
            {character.literal}
          </div>
        </div>
        <div className="flex flex-col">
          <div id="kanji-meaning">{meanings.join(", ")}</div>
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
