import { Metadata } from "next";

import PageTitle from "@/components/typography/PageTitle";
import SectionTitle from "@/components/typography/SectionTitle";
import Japanese from "@/components/typography/Japanese";
import Paragraph from "@/components/typography/Paragraph";
import KeyPoint from "@/components/keypoint/KeyPoint";
import KeyPointText from "@/components/keypoint/KeyPointText";
import Bold from "@/components/typography/Bold";
import DictionarySearch from "@/components/hover/DictionarySearch";
import VocabularyType from "@/components/vocabulary/VocabularyType";
import ExampleType from "@/components/example/ExampleType";
import Vocabulary from "@/components/vocabulary/Vocabulary";
import Example from "@/components/example/Example";
import WrittenExerciseType from "@/components/exercise/WrittenExerciseType";
import WrittenExercise from "@/components/exercise/WrittenExercise";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import BottomNavigationLink from "@/components/navigation/BottomNavigationLink";

export const metadata: Metadata = {
  title: "TanukiHub | The Particle 「が」",
};

const VerbOfExistenceSection = () => {
  return (
    <section id="verb-of-existence">
      <SectionTitle>
        The Verb of Existence, <Japanese>ある</Japanese> and{" "}
        <Japanese>いる</Japanese>
      </SectionTitle>
      <Paragraph>
        In previous lesson, we talked about how to express that something is
        there (or not). But how do you exactly express the existence of
        something? That's where the <Japanese>ある</Japanese> and{" "}
        <Japanese>いる</Japanese> verb comes in.
      </Paragraph>
      <Paragraph>
        <Japanese>ある</Japanese> (aru) and <Japanese>いる</Japanese> (iru) are
        what we call 'verbs of existence.' In English, you'd translate both of
        them as 'to be' or 'to exist.' They are used to express the existence of
        something.
      </Paragraph>
      <Paragraph>
        But why do they share the same meaning? how can we differentiate their
        usage? Why do we choose to use this verb instead of the other?
        Generally, if you want to express the existence of objects that could
        move or expected to move on their own (animate objects), you would use
        the verb <Japanese>いる</Japanese>. These include humans and animals,
        hence they are often associated with living being.
      </Paragraph>
      <Paragraph>
        But what about trees? What about plants? They are also living being, but
        why don't we use <Japanese>いる</Japanese> for them too? Remember that{" "}
        <Japanese>いる</Japanese> is used for objects for animate objects? Do
        you think trees could move or even walk on their own? I'm sure everyone
        would freak out if they do. Hence they are categorized as inanimate
        objects.
      </Paragraph>
      <Paragraph>
        How about the verb <Japanese>ある</Japanese>? Well, as you can infer
        already, the verb <Japanese>ある</Japanese> is used to express the
        existence of objects that could not move on their own (inanimate
        objects). These include Books, Tables, Cars, Planes, etc.
      </Paragraph>
      <Paragraph>
        Now, let's talk about the verb placement. As previously taught, Japanese
        follows the pattern where the verb would always be in the last of a
        sentence. But how can we connect the subject and the verb? In order to
        connect the subject and the verb or anything Japanese language use, we
        would need a connector or <Bold>a particle</Bold>. We will learn about
        what particle is in the next section
      </Paragraph>
      <KeyPoint>
        <KeyPointText>
          The verb <Japanese>ある</Japanese> is used for objects that could not
          move on their own, while <Japanese>いる</Japanese> is used for objects
          that could move on their own
        </KeyPointText>
      </KeyPoint>
    </section>
  );
};

const SubjectMarkerSection = () => {
  const vocabularies: VocabularyType[] = [
    {
      kanji: "犬",
      searchFor: "犬",
      reading: "いぬ",
      meaning: "Dog",
    },
    {
      kanji: "車",
      searchFor: "車",
      reading: "くるま",
      meaning: "Car",
    },
    {
      kanji: "鼻",
      searchFor: "鼻",
      reading: "はな",
      meaning: "Nose",
    },
    {
      kanji: "長い",
      searchFor: "長い",
      reading: "ながい",
      meaning: "Long",
    },
    {
      kanji: "花",
      searchFor: "花",
      reading: "はな",
      meaning: "Flower",
    },
    {
      kanji: "綺麗",
      searchFor: "綺麗",
      reading: "きれい",
      meaning: "Pretty",
    },
  ];

  const examples: ExampleType[] = [
    {
      kana: "犬がいる",
      romaji: "Inu ga iru",
      translation: "There is a dog",
    },
    {
      kana: "車がある",
      romaji: "Kuruma ga aru",
      translation: "There is a car",
    },
    {
      kana: "鼻が長い",
      romaji: "Hana ga nagai",
      translation: "The nose is long",
    },
    {
      kana: "花が綺麗",
      romaji: "Hana ga kirei",
      translation: "The flower is pretty",
    },
  ];

  return (
    <section id="subject-marker">
      <SectionTitle>The Subject Marker: 「が」</SectionTitle>
      <Paragraph>
        What is a particle? Particles, known as{" "}
        <DictionarySearch searchFor="助詞">
          <Japanese>助詞</Japanese>
        </DictionarySearch>{" "}
        (joshi), are small words in Japanese grammar that immediately follow the
        modified noun, verb, adjective, or sentence. They indicate relations of
        words within a sentence.
      </Paragraph>
      <Paragraph>
        Particles help to clarify the meaning of a sentence by indicating the
        function of a word. For example, Subject Marker: "
        <Japanese>が</Japanese>" is used to mark the subject of a sentence. It
        indicates who or what performs the action. For example, in the sentence
        "
        <Japanese>
          <DictionarySearch searchFor="犬">犬</DictionarySearch>が
          <DictionarySearch searchFor="好き">好き</DictionarySearch>です
        </Japanese>
        ” (inu ga suki desu ~ (i) like dog), "
        <Japanese>
          <DictionarySearch searchFor="犬">犬</DictionarySearch>
        </Japanese>
        " (inu) is the subject and "<Japanese>が</Japanese>" indicates that the
        action of liking is performed on the dog.
      </Paragraph>
      <Paragraph>
        The particle "<Japanese>が</Japanese>" can also be used a link to a
        subject with a description or a state. Take this sentence for example, "
        <Japanese>
          <DictionarySearch searchFor="味">味</DictionarySearch>が
          <DictionarySearch searchFor="甘い">甘い</DictionarySearch>
        </Japanese>
        " (aji ga amai ~ the taste is sweet), "
        <Japanese>
          <DictionarySearch searchFor="味">味</DictionarySearch>
        </Japanese>
        " (aji) indicates the subject, and "
        <Japanese>
          <DictionarySearch searchFor="甘い">甘い</DictionarySearch>
        </Japanese>
        " indicates the description of the subject. In this case, the taste is
        described as sweet tasting.
      </Paragraph>
      <Vocabulary vocabularies={vocabularies} />
      <Example examples={examples} />
    </section>
  );
};

const WrittenExerciseSection = () => {
  const writtenExercises: WrittenExerciseType[] = [
    {
      question: "There is a university",
      answer: "大学校がある",
    },
    {
      question: "The plane is big",
      answer: "飛行機が大きい",
    },
    {
      question: "There is an elephant",
      answer: "象がいる",
    },
    {
      question: "The room is dirty",
      answer: "部屋が汚い",
    },
    {
      question: "There is a train",
      answer: "電車がある",
    },
  ];

  return (
    <section id="written-exercise">
      <SectionTitle>Written Exercise</SectionTitle>
      <WrittenExercise exercises={writtenExercises} />
    </section>
  );
};

export default function Page() {
  return (
    <div id="the-particle-ga">
      <PageTitle>The Particle 「が」</PageTitle>
      <VerbOfExistenceSection />
      <SubjectMarkerSection />
      <WrittenExerciseSection />
      <BottomNavigation>
        <BottomNavigationLink href="/beginner/state-of-being-copular">
          State-of-Being: Copular Sentence
        </BottomNavigationLink>
        <BottomNavigationLink href="/" right>
          Lorem Ipsum
        </BottomNavigationLink>
      </BottomNavigation>
    </div>
  );
}
