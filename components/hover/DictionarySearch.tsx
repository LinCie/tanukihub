"use client";

// React Imports
import { ReactNode, useState } from "react";

// Radix Imports
import * as Tooltip from "@radix-ui/react-tooltip";

// Custom Component Imports
import { Word } from "@/services/dictionaries/jmdict";
import instance from "@/services/api/api";
import Spinner from "../loading/Spinner";

interface ResponseData {
  words: Word[];
}

interface DictionarySearchProps {
  children?: ReactNode;
  searchFor?: string;
}

export default function DictionarySearch({
  children,
  searchFor,
}: DictionarySearchProps) {
  const [meanings, setMeanings] = useState<string[]>([]);

  const getWord = async () => {
    try {
      // Paramater used for the GET request
      const params = {
        search: searchFor,
        lang: "jp",
      };

      const response = await instance.get("/dictionary", { params: params });
      const data: ResponseData = response.data;

      if (data.words) {
        // Create a temp string array to store the meanings
        const newMeanings: string[] = [];
        // Get all the meanings and push it into new meannings
        data.words[0].sense.forEach((sense) => {
          sense.gloss.forEach((gloss) => newMeanings.push(gloss.text));
        });
        // Set the newmeanings into meanings
        setMeanings(newMeanings);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Call whenever the tooltip open state is changed. Fetch the data if it's open, don't do anything otherwise
  const handleOpenChange = (open: boolean) => {
    // Do not fetch when meanings contains strings (Word Found)
    if (meanings.length > 0) {
      return;
    }

    if (open) {
      getWord();
    }
  };

  return (
    <Tooltip.Provider delayDuration={350}>
      <Tooltip.Root onOpenChange={handleOpenChange}>
        <Tooltip.Trigger asChild>
          <span className="relative md:cursor-help md:underline md:decoration-[#CC3E3E] md:decoration-dotted md:dark:decoration-white">
            {children}
          </span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-[101] max-w-xs select-none truncate rounded-md bg-[#CC3E3E] px-3 py-2 text-base text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] hover:whitespace-normal data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade dark:bg-gray-700"
            sideOffset={5}
          >
            {meanings.length > 0 ? (
              meanings.join(", ")
            ) : (
              <Spinner className="h-5 w-5" />
            )}
            <Tooltip.Arrow className="fill-[#CC3E3E] dark:fill-gray-700" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
