import { useContext, useEffect, useState } from "react";
import { useChallenge } from "../hooks/Challenge";
import { useCountdown } from "../hooks/Countdown";
import {
  Container,
  CountdownContainer,
  TimeContainer,
  FirstDigit,
  SecondDigit,
  Separator,
  CountdownButton,
  CountdownButtonActive,
} from "../styles/components/Countdown";

export default function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useCountdown();
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <Container>
      <CountdownContainer>
        <TimeContainer>
          <FirstDigit>{minuteLeft}</FirstDigit>
          <SecondDigit>{minuteRight}</SecondDigit>
        </TimeContainer>
        <Separator>:</Separator>
        <TimeContainer>
          <FirstDigit>{secondLeft}</FirstDigit>
          <SecondDigit>{secondRight}</SecondDigit>
        </TimeContainer>
      </CountdownContainer>

      {hasFinished ? (
        <CountdownButton disabled type="button">
          Ciclo encerrado
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButtonActive type="button" onClick={resetCountdown}>
              Abandonar ciclo
            </CountdownButtonActive>
          ) : (
            <CountdownButton type="button" onClick={startCountdown}>
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </Container>
  );
}
