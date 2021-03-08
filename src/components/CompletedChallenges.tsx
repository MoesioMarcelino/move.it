import { useChallenge } from "../hooks/Challenge";
import {
  Container,
  Span,
  Total,
} from "../styles/components/CompletedChallenges";

export default function CompletedChallenges() {
  const { challengesCompleted } = useChallenge();
  return (
    <Container>
      <Span>Desafios completos</Span>
      <Total>{challengesCompleted}</Total>
    </Container>
  );
}
