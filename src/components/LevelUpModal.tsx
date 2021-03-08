import { useChallenge } from "../hooks/Challenge";

import {
  Overlay,
  Container,
  Header,
  Label,
  Description,
  ButtonCloseModal,
  ImgClose,
} from "../styles/components/LevelUpModal";

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenge();
  return (
    <Overlay>
      <Container>
        <Header>{level}</Header>

        <Label>Parabéns</Label>
        <Description>Você alcançou um novo level</Description>

        <ButtonCloseModal type="button" onClick={closeLevelUpModal}>
          <ImgClose src="/icons/close.svg" alt="Fechar modal" />
        </ButtonCloseModal>
      </Container>
    </Overlay>
  );
}
