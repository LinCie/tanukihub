"use client";

import React, { ComponentPropsWithRef, ReactNode, useState } from "react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

import instance from "@/components/api/api";
import PageTitle from "@/components/typography/PageTitle";
import { KanjiCharacter } from "@/components/dictionaries/kanjidic";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";

import * as RadioGroup from "@radix-ui/react-radio-group";

interface Inputs {
  lang: "en" | "jp";
  by: "kanji" | "kana";
  search: string;
}

interface ResponseData {
  characters: KanjiCharacter[];
}

interface RadioItemLangProps
  extends RadioGroup.RadioGroupItemProps,
    Omit<
      ComponentPropsWithRef<"button">,
      keyof RadioGroup.RadioGroupItemProps
    > {
  children?: ReactNode;
}

const RadioItem = React.forwardRef<HTMLButtonElement, RadioItemLangProps>(
  ({ children, value, ...props }, ref) => (
    <RadioGroup.Item value={value} ref={ref} {...props}>
      {children}
    </RadioGroup.Item>
  ),
);
RadioItem.displayName = "RadioItem"

interface SearchFormProps {
  setCharacters: (characters: KanjiCharacter[]) => void;
  setLoading: (state: boolean) => void;
}

const SearchForm = ({ setCharacters, setLoading }: SearchFormProps) => {
  const { register, handleSubmit, watch, control } = useForm<Inputs>();

  const watchLang = watch("lang", "en");

  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    try {
      setLoading(true);
      const response = await instance.get(`/kanji`, { params: inputs });
      const data: ResponseData = response.data;

      if (data.characters) {
        setCharacters(data.characters);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        id="search-radio"
        className="mb-2 flex flex-col gap-2 sm:gap-3 sm:flex-row"
      >
        <div className="flex gap-2">
          <div className="font-bold">Search In: </div>
          <Controller
            name="lang"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup.Root
                className="flex gap-4"
                defaultValue="en"
                onValueChange={(value) => {
                  field.onChange(value);
                }}
                {...field}
              >
                <div className="flex items-center justify-center">
                  <RadioItem
                    className="h-[25px] w-[25px] cursor-pointer rounded-full border-[2px] border-[#CC3E3E] bg-transparent hover:bg-[#cc3e3e4b] dark:border-white dark:hover:bg-gray-800"
                    id="lang1"
                    value="en"
                  >
                    <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[11px] after:w-[11px] after:rounded-full after:bg-[#CC3E3E] after:content-[''] dark:after:bg-white" />
                  </RadioItem>
                  <label
                    className="cursor-pointer pl-2 text-base leading-none"
                    htmlFor="lang1"
                  >
                    English
                  </label>
                </div>
                <div className="flex items-center justify-center">
                  <RadioItem
                    className="h-[25px] w-[25px] cursor-pointer rounded-full border-[2px] border-[#CC3E3E] bg-transparent hover:bg-[#cc3e3e4b] dark:border-white dark:hover:bg-gray-800"
                    id="lang2"
                    value="jp"
                  >
                    <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[11px] after:w-[11px] after:rounded-full after:bg-[#CC3E3E] after:content-[''] dark:after:bg-white" />
                  </RadioItem>
                  <label
                    className="cursor-pointer pl-2 text-base leading-none"
                    htmlFor="lang2"
                  >
                    Japanese
                  </label>
                </div>
              </RadioGroup.Root>
            )}
          />
        </div>
        {watchLang === "jp" && (
          <div className="flex gap-2">
            <div className="font-bold">Search by: </div>
            <Controller
              name="by"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <RadioGroup.Root
                  className="flex gap-4"
                  defaultValue="kanji"
                  onValueChange={(value) => {
                    field.onChange(value);
                  }}
                  {...field}
                >
                  <div className="flex items-center justify-center">
                    <RadioItem
                      className="h-[18px] w-[18px] cursor-pointer border-[2px] border-[#CC3E3E] bg-transparent hover:bg-[#cc3e3e4b] dark:border-white dark:hover:bg-gray-800"
                      id="by1"
                      value="kanji"
                    >
                      <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[8px] after:w-[8px] after:bg-[#CC3E3E] after:content-[''] dark:after:bg-white" />
                    </RadioItem>
                    <label
                      className="cursor-pointer pl-2 text-base leading-none"
                      htmlFor="by1"
                    >
                      Kanji
                    </label>
                  </div>
                  <div className="flex items-center justify-center">
                    <RadioItem
                      className="h-[18px] w-[18px] cursor-pointer border-[2px] border-[#CC3E3E] bg-transparent hover:bg-[#cc3e3e4b] dark:border-white dark:hover:bg-gray-800"
                      id="by2"
                      value="kana"
                    >
                      <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[8px] after:w-[8px] after:bg-[#CC3E3E] after:content-[''] dark:after:bg-white" />
                    </RadioItem>
                    <label
                      className="cursor-pointer pl-2 text-base leading-none"
                      htmlFor="by2"
                    >
                      Kana
                    </label>
                  </div>
                </RadioGroup.Root>
              )}
            />
          </div>
        )}
      </div>
      <div
        id="search-text"
        className="mb-4 flex rounded-md border-2 border-[#CC3E3E] dark:border-white md:mb-6 lg:mb-8"
      >
        <input
          {...register("search", { required: true })}
          type="search"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent px-2 focus:border-0 focus:outline-none dark:bg-transparent"
        />
        <button
          type="submit"
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>
      </div>
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

const CharacterDisplayLoading = () => {
  const springs = useSpring({
    loop: { reverse: true },
    from: { opacity: 1 },
    to: { opacity: 0.5 },
    config: { duration: 1000, tension: 120, friction: 14 },
  });

  return (
    <animated.section
      id="character-display-loading"
      style={springs}
      className="mb-10"
    >
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
    </animated.section>
  );
};

interface CharacterDisplayProps {
  character: KanjiCharacter | undefined;
}

const CharacterDisplay = ({ character }: CharacterDisplayProps) => {
  if (!character) {
    return null;
  }

  return (
    <div className="mb-10 flex flex-col lg:flex-row lg:gap-2">
      <KanjIDisplay character={character} />
      <div className="flex flex-col sm:flex-row sm:gap-2 lg:flex-[7]">
        <ReadingDisplay character={character} />
        <MiscDisplay character={character} />
      </div>
    </div>
  );
};

export default function KanjiSearch() {
  const [characters, setCharacters] = useState<KanjiCharacter[]>();
  const [loading, setLoading] = useState(false);

  const handleCharacters = (characters: KanjiCharacter[]) => {
    setCharacters(characters);
  };

  const handleLoading = (state: boolean) => {
    setLoading(state);
  };

  if (characters) {
    console.log(characters.length);
  }

  return (
    <div id="kanji-search">
      <PageTitle>Kanji Search</PageTitle>
      <SearchForm setCharacters={handleCharacters} setLoading={handleLoading} />
      {loading ? (
        <CharacterDisplayLoading />
      ) : (
        characters?.map((character) => (
          <CharacterDisplay key={character.literal} character={character} />
        ))
      )}
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
