import Example from "@/components/example/Example";
import ExampleType from "@/components/example/ExampleType";
import WrittenExercise from "@/components/exercise/WrittenExercise";
import WrittenExerciseType from "@/components/exercise/WrittenExerciseType";
import KeyPoint from "@/components/keypoint/KeyPoint";
import KeyPointText from "@/components/keypoint/KeyPointText";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import BottomNavigationLink from "@/components/navigation/BottomNavigationLink";
import Bold from "@/components/typography/Bold";
import Japanese from "@/components/typography/Japanese";
import PageTitle from "@/components/typography/PageTitle";
import Paragraph from "@/components/typography/Paragraph";
import SectionTitle from "@/components/typography/SectionTitle";
import Vocabulary from "@/components/vocabulary/Vocabulary";
import VocabularyType from "@/components/vocabulary/VocabularyType";

const NonPastTenseSection = () => {
  const vocabularies: VocabularyType[] = [
    {
      kanji: "学生",
      searchFor: "学生",
      reading: "がくせい",
      meaning: "Student",
    },
    {
      kanji: "本",
      searchFor: "counter for telephone calls",
      reading: "ほん",
      meaning: "Book",
      english: true,
    },
    {
      kanji: "犬",
      searchFor: "犬",
      reading: "いぬ",
      meaning: "Dog",
    },
  ];

  const examples: ExampleType[] = [
    {
      kana: "本だ",
      romaji: "Hon da",
      translation: "(It's) a book",
    },
    {
      kana: "犬です",
      romaji: "Inu desu",
      translation: "(It's) a dog",
    },
    {
      kana: "学生です",
      romaji: "Gakusei desu",
      translation: "(I'm) a student",
    },
  ];

  return (
    <section id="non-past-tense">
      <SectionTitle>Copular Sentences: Non Past Tense</SectionTitle>
      <Paragraph>
        You may wonder, what is copula? A copula is a linguistic term that
        refers to a word or grammatical element used to link the subject of a
        sentence to a subject complement or predicate. In simpler terms, it's a
        word that connects the subject of a sentence to a description or
        attribute that characterizes the subject. In English, the most common
        copula is the verb "to be" in its various forms (am, is, are, was, were,
        etc.). For example: She <Bold>is</Bold> a student
      </Paragraph>
      <Paragraph>
        In Japanese, the state of being is also often expressed using a copula,
        which are words like "<Japanese>だ</Japanese>" (da) and "
        <Japanese>です</Japanese>" (desu). These are essential components of
        Japanese grammar, and they are used to link subjects to predicates or to
        indicate the state of being. "Da" is a plain and less formal form of the
        copula. It is commonly used in informal or casual conversations among
        friends, family members, or in relaxed settings. It is used to link a
        subject to a predicate, indicating the state of being. On the other
        hand, "Desu" is a polite form of the copula and is used in formal or
        polite speech. It is often used in business settings, with strangers, or
        when speaking with superiors, to show respect and maintain politeness.
      </Paragraph>
      <KeyPoint>
        <KeyPointText>
          If you want to declare something, you'll have to attach the thing you
          want to declare with "<Japanese>だ</Japanese>" in informal situations,
          or "<Japanese>です</Japanese>" in formal situations.
        </KeyPointText>
      </KeyPoint>
      <Vocabulary vocabularies={vocabularies} />
      <Example examples={examples} />
    </section>
  );
};

const NegativeNonPastTenseSection = () => {
  const examples: ExampleType[] = [
    {
      kana: "犬でわない",
      romaji: "Inu dewanai",
      translation: "(It's) not a dog",
    },
    {
      kana: "学生ではありません",
      romaji: "Gakusei dewaarimasen",
      translation: "(I'm) not a student",
    },
  ];

  return (
    <section id="negative-non-past-tense">
      <SectionTitle>Copular Sentences: Negative Non Past Tense</SectionTitle>
      <Paragraph>
        Much like in English, you can transform copular sentences into negative
        forms to express the negation of a statement. To do this, you simply
        need to change the copula into its negative form. In informal speech,
        the plain form of the copula is "<Japanese>だ</Japanese>". To express
        the negative non past tense in informal language, you can replace "
        <Japanese>だ</Japanese>" with "<Japanese>ではない</Japanese>". In formal
        situtation, the copula "<Japanese>です</Japanese>" can be replaced with
        "<Japanese>ではありません</Japanese>".
      </Paragraph>
      <KeyPoint>
        <KeyPointText>
          Similar to Non Past Tense, if you want to declare something as a
          negation (declaring something that is not), you can attach "
          <Japanese>ではない</Japanese>" in informal situations, and "
          <Japanese>ではありません</Japanese>" in formal situations.
        </KeyPointText>
      </KeyPoint>
      <Example examples={examples} />
    </section>
  );
};

const PastTenseSection = () => {
  const vocabularies: VocabularyType[] = [
    {
      kanji: "元気",
      searchFor: "元気",
      reading: "げんき",
      meaning: "Healthy",
    },
  ];

  const examples: ExampleType[] = [
    {
      kana: "元気だった",
      romaji: "Genki datta",
      translation: "(I) was healthy",
    },
    {
      kana: "学生でした",
      romaji: "Gakusei deshita",
      translation: "(I) was a student",
    },
  ];

  return (
    <section id="past-tense">
      <SectionTitle>Copular Sentences: Past Tense</SectionTitle>
      <Paragraph>
        In Japanese, the copular past tense is used to express past states or
        actions using the copula. As you have learned, there are 2 non past
        copulars, "<Japanese>だ</Japanese>" and "<Japanese>です</Japanese>". In
        order to use it to express past states, you'll have to transform it into
        "<Japanese>だった</Japanese>" and "<Japanese>でした</Japanese>"
        respectively.
      </Paragraph>
      <Vocabulary vocabularies={vocabularies} />
      <Example examples={examples} />
    </section>
  );
};

const NegativePastTenseSection = () => {
  const examples: ExampleType[] = [
    {
      kana: "犬ではなかった",
      romaji: "Inu dewanakatta",
      translation: "(It) wasn't a dog",
    },
    {
      kana: "学生ではありませんでした",
      romaji: "Gakusei dewaarimasendeshita",
      translation: "(I) wasn't a student",
    },
  ];

  return (
    <section id="negative-past-tense">
      <SectionTitle>Copular Sentences: Negative Past Tense</SectionTitle>
      <Paragraph>
        Similar to negative non past tense, the negative copular past tense is
        used to describe past states or conditions that were not true or actions
        that did not happen in the past. It involves attaching "
        <Japanese>ではなかった</Japanese>" for informal situations, or "
        <Japanese>ではありませんでした</Japanese>" for formal situations.
      </Paragraph>
      <Example examples={examples} />
    </section>
  );
};

const WrittenExerciseSection = () => {
  const exercises: WrittenExerciseType[] = [
    {
      question: "(It's) a dog.",
      answer: "犬だ / 犬です",
    },
    {
      question: "(I) was a teacher.",
      answer: "先生だった / 先生でした",
    },
    {
      question: "(I'm) healthy / fine.",
      answer: "元気だ / 元気です",
    },
    {
      question: "(It's) not an animal.",
      answer: "動物ではない / 動物ではありません",
    },
    {
      question: "(It) wasn't a book.",
      answer: "本ではなかった / 本ではありませんでした",
    },
  ];

  return (
    <section id="written-exercise">
      <SectionTitle>Written Exercise</SectionTitle>
      <WrittenExercise exercises={exercises}></WrittenExercise>
    </section>
  );
};

export default function Page() {
  return (
    <div id="state-of-being-copular">
      <PageTitle>State-of-Being: Copular Sentence</PageTitle>
      <NonPastTenseSection />
      <NegativeNonPastTenseSection />
      <PastTenseSection />
      <NegativePastTenseSection />
      <WrittenExerciseSection />
      <BottomNavigation>
        <BottomNavigationLink href="/introductory/intro-to-katakana">
          Intro to Katakana
        </BottomNavigationLink>
        <BottomNavigationLink right href="/beginner/the-particle-ga">
          The Particle「が」
        </BottomNavigationLink>
      </BottomNavigation>
    </div>
  );
}
