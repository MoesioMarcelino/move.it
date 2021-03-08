import { useChallenge } from "../hooks/Challenge";
import { useCountdown } from "../hooks/Countdown";
import {
  Container,
  ChallengeBoxNotActive,
  Title,
  Description,
  ImgBoxNotActive,
  ChallengeBoxActive,
  HeaderBoxActive,
  MainBoxActive,
  FooterBoxActive,
  ButtonBoxActive,
} from "../styles/components/ChallengeBox";

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
    <Container>
      {activeChallenge ? (
        <ChallengeBoxActive>
          <HeaderBoxActive>Ganhe {activeChallenge.amount} xp</HeaderBoxActive>

          <MainBoxActive>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </MainBoxActive>

          <FooterBoxActive>
            <ButtonBoxActive
              fails
              type="button"
              onClick={handleChangllendFailed}
            >
              Falhei
            </ButtonBoxActive>

            <ButtonBoxActive type="button" onClick={handleChangllendSucceeded}>
              Completei
            </ButtonBoxActive>
          </FooterBoxActive>
        </ChallengeBoxActive>
      ) : (
        <ChallengeBoxNotActive>
          <Title>Finalize um ciclo para receber um desafio</Title>
          <Description>
            <ImgBoxNotActive src="icons/level-up.svg" alt="level up" />
            Avance de level completando desafios.
          </Description>
        </ChallengeBoxNotActive>
      )}
    </Container>
  );
}
