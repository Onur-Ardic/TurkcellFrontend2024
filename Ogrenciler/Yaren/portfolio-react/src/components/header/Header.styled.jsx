import styled from "styled-components";
import { typing, blink } from "../../style/Animations";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.pastelpink};
  padding: 4rem 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 300px;
  padding: 2rem 0;

  @media (max-width: ${({ theme }) => theme.responsive}) {
    text-align: center;
  }
`;

export const TypingTitle = styled.h1`
  font-size: 4em;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;

  animation: ${typing} 2s steps(20), ${blink} 0.5s step-end infinite alternate;
`;
export const Subtitle = styled.p`
  font-size: 1.5em;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  animation: ${typing} 2s steps(20), ${blink} 0.5s step-end infinite alternate;
`;

export default StyledHeader;
