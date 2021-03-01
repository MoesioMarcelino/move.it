import { useChallenge } from '../hooks/Challenge';
import styles from '../styles/components/ExpeirenceBar.module.css';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallenge();

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
