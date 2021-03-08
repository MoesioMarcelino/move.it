import { useChallenge } from "../hooks/Challenge";
import {
  Header,
  Metric,
  ProgressContainer,
  ProgressBar,
  ProgressValue,
} from "../styles/components/ExpeirenceBar";

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallenge();

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Header>
      <Metric>0 xp</Metric>
      <ProgressContainer>
        <ProgressBar style={{ width: `${percentToNextLevel}%` }} />

        <ProgressValue style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </ProgressValue>
      </ProgressContainer>
      <Metric>{experienceToNextLevel} xp</Metric>
    </Header>
  );
}
