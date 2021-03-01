import { useContext } from 'react';
import { useChallenge } from '../hooks/Challenge';
import { useCountdown } from '../hooks/Countdown';
import style from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenge();
  const { resetCountdown } = useCountdown();

  function handleChangllendSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChangllendFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={style.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={style.challengeBoxActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              className={style.challengeBoxFailedButton}
              type="button"
              onClick={handleChangllendFailed}
            >
              Falhei
            </button>

            <button
              className={style.challengeBoxSucceededButton}
              type="button"
              onClick={handleChangllendSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={style.challengeBoxNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
