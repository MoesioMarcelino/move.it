import Head from "next/head";
import { GetServerSideProps } from "next";

import ChallengeBox from "../components/ChallengeBox";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import { CountdownProvider } from "../hooks/Countdown";
import { ChallengesProvider } from "../hooks/Challenge";

import { Container, Section, Components } from "../styles/pages/Home";
interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <Container>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <Section>
            <Components>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </Components>
            <Components>
              <ChallengeBox />
            </Components>
          </Section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req: { cookies },
}) => {
  const { level, currentExperience, challengesCompleted } = cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
