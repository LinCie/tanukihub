// Next imports
import { Metadata } from "next";

// Custom component imports
import BottomNavigation from "@/components/navigation/BottomNavigation";
import BottomNavigationLink from "@/components/navigation/BottomNavigationLink";
import PageTitle from "@/components/typography/PageTitle";
import SectionTitle from "@/components/typography/SectionTitle";
import Paragraph from "@/components/typography/Paragraph";
import Japanese from "@/components/typography/Japanese";
import ExampleType from "@/components/example/ExampleType";
import Example from "@/components/example/Example";
import VocabularyType from "@/components/vocabulary/VocabularyType";
import Vocabulary from "@/components/vocabulary/Vocabulary";
import WrittenExercise from "@/components/exercise/WrittenExercise";
import WrittenExerciseType from "@/components/exercise/WrittenExerciseType";

export const metadata: Metadata = {
  title: "TanukiHub | The Particle 「は」",
};

const TopicMarkerSection = () => {
  const vocabularies: VocabularyType[] = [
    {
      kanji: "鉛筆",
      searchFor: "鉛筆",
      reading: "えんぴつ",
      meaning: "Pencil",
    },
    {
      kanji: "医者",
      searchFor: "医者",
      reading: "いしゃ",
      meaning: "Doctor",
    },
  ];
  const examples: ExampleType[] = [
    {
      kana: "これは鉛筆です",
      romaji: "これはえんぴつです",
      translation: "This is a pencil",
    },
    {
      kana: "キムさんは医者です",
      romaji: "キムさんはいしゃです",
      translation: "Kim is a doctor",
    },
  ];
  return (
    <section id="topic-marker-section">
      <SectionTitle>The Topic Marker 「は」</SectionTitle>
      <Paragraph>
        The particle "wa" (<Japanese>は</Japanese>) in Japanese serves as a
        topic marker, indicating the subject or theme of a sentence. The primary
        purpose of it is to introduce the topic of the sentence. The topic is
        what the sentence is about, and it provides the context for the rest of
        the statement.
      </Paragraph>
      <Paragraph>
        Once a topic is established with "wa," it tends to persist in the
        conversation until a new topic is introduced. This stability allows for
        a smoother flow in Japanese discourse, and it contrasts with English,
        where the subject of a sentence can change more frequently.
      </Paragraph>
      <Vocabulary vocabularies={vocabularies} />
      <Example examples={examples} />
    </section>
  );
};

const WrittenExerciseSection = () => {
  const exercises: WrittenExerciseType[] = [
    {
      question: "That is a giraffe",
      answer: "あれは麒麟です",
    },
    {
      question: "Kimura is an office worker",
      answer: "木村さんは社員です",
    },
    {
      question: "I'm a bank clerk",
      answer: "私は銀行員です",
    },
    {
      question: "He is a police",
      answer: "彼は警察です",
    },
  ];

  return (
    <section id="written-exercise">
      <SectionTitle>Written Exercise</SectionTitle>
      <WrittenExercise exercises={exercises} />
    </section>
  );
};

export default function Page() {
  return (
    <div id="the-particle-ha">
      <PageTitle>The Particle 「は」</PageTitle>
      <TopicMarkerSection />
      <WrittenExerciseSection />
      <BottomNavigation>
        <BottomNavigationLink href="/beginner/the-partivle-ga">
          The Particle 「が」
        </BottomNavigationLink>
        <BottomNavigationLink right href="/">
          Lorem Ipsum
        </BottomNavigationLink>
      </BottomNavigation>
    </div>
  );
}
