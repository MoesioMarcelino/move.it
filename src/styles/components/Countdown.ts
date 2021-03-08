import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);
  flex-direction: column;
  flex: 1;
`;

export const CountdownContainer = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;
`;

export const FirstDigit = styled.span`
  flex: 1;
  border-right: 1px solid #f0f1f3;
`;

export const SecondDigit = styled.span`
  flex: 1;
  border-left: 1px solid #f0f1f3;
`;

export const Separator = styled.span`
  font-size: 6.5rem;
  margin: 0 0.5rem;
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background-color: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.4s;

  &::not(:disabled):hover {
    background-color: var(--blue-dark);
  }

  &:disabled {
    background-color: var(--white);
    cursor: not-allowed;
    color: var(--title);
    border-bottom: 4px solid var(--green);
  }
`;

export const CountdownButtonActive = styled.button`
  background-color: var(--white);
  color: var(--title);
  margin-top: 2rem;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  font-size: 1.25rem;
  font-weight: 600;

  padding: 1.5rem 8rem;

  transition: background-color 0.4s;

  &:not(:disabled):hover {
    background-color: var(--red);
    color: var(--white);
  }
`;
