"use client";

// React Imports
import React, {
  ComponentPropsWithRef,
  ReactNode,
  useEffect,
  useState,
} from "react";

// Next Imports
import Link from "next/link";

// React Hook Form Imports
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// Radix Imports
import { MagnifyingGlassIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import * as RadioGroup from "@radix-ui/react-radio-group";

// Local Imports
import instance from "@/services/api/api";
import PageTitle from "@/components/typography/PageTitle";
import { KanjiCharacter } from "@/services/dictionaries/kanjidic";
import Japanese from "@/components/typography/Japanese";
import PageLoading from "@/components/loading/PageLoading";
import Spinner from "@/components/loading/Spinner";

/* 
  SearchForm stuffs
*/

// Input type for React Hook Form
interface Inputs {
  lang: "en" | "jp";
  by: "kanji" | "kana";
  search: string;
}

// Response data type from axios
interface ResponseData {
  characters: KanjiCharacter[];
}

// Radio Item props
interface RadioItemProps
  extends RadioGroup.RadioGroupItemProps,
    Omit<
      ComponentPropsWithRef<"button">,
      keyof RadioGroup.RadioGroupItemProps
    > {
  children?: ReactNode;
}

// Custom Radix's Radio Item components now with ref. Used for React Hook Form controller
const RadioItem = React.forwardRef<HTMLButtonElement, RadioItemProps>(
  ({ children, value, ...props }, ref) => (
    <RadioGroup.Item value={value} ref={ref} {...props}>
      {children}
    </RadioGroup.Item>
  ),
);

// Do not delete, will result in eslint error if deleted. Used to name an Radio Item as React.forwardRef returns an anonymous function
RadioItem.displayName = "RadioItem";

// Search Form Props
interface SearchFormProps {
  setCharacters: (characters: KanjiCharacter[]) => void;
  setLoading: (state: boolean) => void;
}

// Used for searching kanji
const SearchForm = ({ setCharacters, setLoading }: SearchFormProps) => {
  const { register, handleSubmit, watch, control } = useForm<Inputs>({
    defaultValues: {
      search: "",
      lang: "en",
      by: "kanji",
    },
  });

  // Used for the "by" input
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
        className="mb-2 flex flex-col gap-2 sm:flex-row sm:gap-3"
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
                // Note to future self, use onValueChange to change React Hook Form value if using radix
                onValueChange={(value) => {
                  field.onChange(value);
                }}
                data-test="lang-checkbox"
                {...field}
              >
                <div className="flex items-center justify-center">
                  <RadioItem
                    className="h-[25px] w-[25px] cursor-pointer rounded-full border-[2px] border-[#CC3E3E] bg-transparent hover:bg-[#cc3e3e4b] dark:border-white dark:hover:bg-gray-800"
                    id="lang1"
                    value="en"
                    data-test="en-check"
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
                    data-test="jp-check"
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
        <div
          className={`flex gap-2 ${watchLang === "jp" ? "block" : "hidden"}`}
        >
          <div className="font-bold">Search by: </div>
          <Controller
            name="by"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup.Root
                className="flex gap-4"
                onValueChange={(value) => {
                  field.onChange(value);
                }}
                {...field}
                data-test="by-checkbox"
              >
                <div className="flex items-center justify-center">
                  <RadioItem
                    className="h-[18px] w-[18px] cursor-pointer border-[2px] border-[#CC3E3E] bg-transparent hover:bg-[#cc3e3e4b] dark:border-white dark:hover:bg-gray-800"
                    id="by1"
                    value="kanji"
                    data-test="kanji-check"
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
                    data-test="kana-check"
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
      </div>
      <div
        id="search-text"
        className="mb-4 flex rounded-md border-2 border-[#CC3E3E] dark:border-white"
      >
        <input
          {...register("search", { required: true })}
          type="search"
          autoComplete="off"
          data-test="search"
          className="min-w-0 flex-1 bg-transparent px-2 focus:border-0 focus:outline-none dark:bg-transparent"
        />
        <button
          type="submit"
          data-test="submit"
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

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
        <div className="mb-2 text-7xl font-medium transition-all duration-75 ease-in-out group-hover:text-[#CC3E3E] group-active:scale-95">
          <Japanese>{character.literal}</Japanese>
        </div>
        <div className="w-full truncate text-center">{meanings.join(", ")}</div>
        <div className="absolute bottom-1 right-1 opacity-0 transition-opacity duration-75 ease-in-out hover:text-[#CC3E3E] hover:underline group-hover:opacity-100">
          View
        </div>
      </Link>
    </div>
  );
};

/* 
  KanjiSearch
*/

export default function KanjiSearch() {
  // Where character resides
  const [characters, setCharacters] = useState<KanjiCharacter[]>();
  // State used to show that the search is currently underway
  const [loading, setLoading] = useState(false);
  // Used to mount the form
  const [formMounted, setFormMounted] = useState(false);

  const handleCharacters = (characters: KanjiCharacter[]) => {
    setCharacters(characters);
  };

  const handleLoading = (state: boolean) => {
    setLoading(state);
  };

  // Used to mount to form. The form will break if it's mounted on initial render. Do not delete or change
  useEffect(() => {
    setFormMounted(true);
  }, []);

  if (!formMounted) {
    return <PageLoading />;
  }

  return (
    <div id="kanji-search">
      <PageTitle>Kanji Search</PageTitle>
      <SearchForm setCharacters={handleCharacters} setLoading={handleLoading} />
      <section className="flex flex-row flex-wrap justify-around gap-x-4">
        {loading ? (
          <CharacterDisplayLoading />
        ) : (
          characters?.map((character) => (
            <CharacterDisplay key={character.literal} character={character} />
          ))
        )}
      </section>
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
