import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const ChallengeBoxNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.strong`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4;
  max-width: 70%;
  margin-top: 3rem;
`;

export const ImgBoxNotActive = styled.img`
  margin-bottom: 1rem;
`;

export const ChallengeBoxActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const HeaderBoxActive = styled.header`
  color: var(--blue);

  font-weight: 600;
  font-size: 1.25rem;
  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid var(--gray-line);
`;

export const MainBoxActive = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 2rem;
    font-weight: 600;
    color: var(--title);
    margin: 1.5rem 0 1rem;
  }

  p {
    line-height: 1.5;
  }
`;

interface ActionProps {
  fails?: boolean;
}

export const FooterBoxActive = styled.footer<ActionProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const ButtonBoxActive = styled.button<ActionProps>`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  color: var(--white);

  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.2s;
  background: var(--green);

  ${(props) =>
    props.fails &&
    css`
      background: var(--red);
    `}

  &:hover {
    filter: brightness(0.9);
  }
`;
