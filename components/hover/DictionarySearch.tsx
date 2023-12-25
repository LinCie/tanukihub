"use client";

// React Imports
import { ReactNode, useEffect, useState } from "react";

// React Spring Imports
import { animated, useSpring } from "@react-spring/web";

// Custom Component Imports
import { Word } from "@/services/dictionaries/jmdict";
import instance from "@/services/api/api";

interface ResponseData {
  words: Word[];
}

interface WordInfoProps {
  searchFor?: string;
}

const WordInfo = ({ searchFor }: WordInfoProps) => {
  const [meanings, setMeanings] = useState<string[]>();
  const [found, setFound] = useState<boolean>();

  // Initial style for the info
  const [springs, springsApi] = useSpring(() => ({
    from: { opacity: 0 },
  }));

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
        const newMeanings: string[] = [];
        data.words[0].sense.forEach((sense) => {
          sense.gloss.forEach((gloss) => newMeanings.push(gloss.text));
        });
        if (newMeanings.length > 0) {
          setMeanings(newMeanings);
          setFound(true);
          // Start the wordinfo opacity animation
          springsApi.start({
            to: { opacity: 1 },
            config: { duration: 50, tension: 120, friction: 14 },
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Wait for 1500 ms before showing the word info
  useEffect(() => {
    setTimeout(() => getWord(), 2000);
  }, []);

  // Return the word info otherwise
  return found ? (
    <animated.span
      style={springs}
      className="z-[101] absolute left-1/2 top-[-40px] hidden h-fit max-w-xs -translate-x-1/2 transform items-center justify-center border-[1px] border-[#CC3E3E] bg-white p-1 font-normal transition-all dark:border-white dark:bg-gray-950 md:flex"
    >
      <span className="truncate">
        {meanings?.join(", ")}
      </span>
    </animated.span>
  ) : null;
};

interface DictionarySearchProps {
  children?: ReactNode;
  searchFor?: string;
}

export default function DictionarySearch({
  children,
  searchFor,
}: DictionarySearchProps) {
  // Used to show the Word Info
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <span
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      className="relative md:cursor-help md:underline md:decoration-dotted"
    >
      {showInfo ? <WordInfo searchFor={searchFor} /> : null}
      {children}
    </span>
  );
}
