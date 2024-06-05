import styled, { keyframes } from "styled-components";
import { octocatWave, rotate, typing, blink } from "../../style/Animations";

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.gradients.gradientthird};
  padding: 4rem 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .github-corner:hover .octo-arm {
    animation: ${octocatWave} 560ms ease-in-out;
  }

  @media (max-width: 500px) {
    .github-corner:hover .octo-arm {
      animation: none;
    }
    .github-corner .octo-arm {
      animation: ${octocatWave} 560ms ease-in-out;
    }
  }
`;

export const GitHubCorner = styled.a`
  svg {
    fill: #151513;
    color: #fff;
    position: absolute;
    top: 0;
    border: 0;
    left: 0;
    transform: scale(-1, 1);
  }

  .octo-arm {
    transform-origin: 130px 106px;
  }
`;

export const Logo = styled.img`
  width: 300px;
  padding: 2rem 0;

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    width: 200px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    width: 150px;
  }
`;

export const TypingTitle = styled.h1`
  font-size: 4em;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  animation: ${typing} 2s steps(20), ${blink} 0.5s step-end infinite alternate;

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    font-size: 3em;
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    font-size: 2.5em;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5em;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 1rem;
  animation: ${typing} 2s steps(20), ${blink} 0.5s step-end infinite alternate;

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    font-size: 1.2em;
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    font-size: 1em;
  }
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${({ theme }) => theme.colors.black};
  border-top: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  margin-top: 1rem;
  animation: ${rotate} 1.2s linear infinite;

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    width: 25px;
    height: 25px;
  }
`;

export const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.gradients.gradientthird};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.pastelblue};
    color: ${({ theme }) => theme.colors.black};
  }

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9em;
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    padding: 0.3rem 0.6rem;
    font-size: 0.8em;
  }
`;

export default StyledHeader;
