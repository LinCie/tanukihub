import Example from "@/components/example/Example";
import ExampleType from "@/components/example/ExampleType";
import KeyPoint from "@/components/keypoint/KeyPoint";
import KeyPointText from "@/components/keypoint/KeyPointText";
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

export default function Page() {
  return (
    <div id="state-of-being-copular">
      <PageTitle>State-of-Being: Copular Sentence</PageTitle>
      <NonPastTenseSection />
    </div>
  );
}