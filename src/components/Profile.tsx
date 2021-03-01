import { useChallenge } from '../hooks/Challenge';
import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  const { level } = useChallenge();
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/moesiomarcelino.png"
        alt="Moesio marcelino"
      />
      <div>
        <strong>Moesio Marcelino</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
