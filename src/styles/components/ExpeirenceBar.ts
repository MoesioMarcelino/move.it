import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Metric = styled.span`
  font-size: 1rem;
`;

export const ProgressContainer = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background-color: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
`;

export const ProgressBar = styled.div`
  height: 4px;
  border-radius: 4px;
  background-color: var(--green);
`;

export const ProgressValue = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;
