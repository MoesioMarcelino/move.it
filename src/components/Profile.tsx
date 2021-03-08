import { useChallenge } from "../hooks/Challenge";

import {
  Container,
  UserInfoContainer,
  Username,
} from "../styles/components/Profile";

export default function Profile() {
  const { level } = useChallenge();
  return (
    <Container>
      <img
        src="https://github.com/moesiomarcelino.png"
        alt="Moesio marcelino"
      />
      <UserInfoContainer>
        <Username>Moesio Marcelino</Username>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </UserInfoContainer>
    </Container>
  );
}
