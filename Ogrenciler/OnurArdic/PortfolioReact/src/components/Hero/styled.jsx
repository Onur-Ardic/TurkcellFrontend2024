import styled, { keyframes } from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 50px 20px;
  }
`

export const UserName = styled.h3`
  font-size: 60px;
  font-weight: 700;
  font-family: 'Pacifico', cursive;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`

const typing = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 0;
  }
`

const blink = keyframes`
  0%, 100% {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
`

export const AnimatedBio = styled.span`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #fff;
  animation: ${typing} 5s infinite, ${blink} 1s step-end infinite;
  font-size: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 20px;
    border-right: none;
    text-align: center;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  gap: 20px;

  p {
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    p {
      font-size: 20px;
    }
  }
`

const pulseFadeAndRound = keyframes`
  0% {
    transform: scale(1);
    border-radius: 17% 83% 18% 82% / 81% 30% 70% 19%;
  }
  25% {
    transform: scale(1.1);
    border-radius: 34% 66% 36% 64% / 58% 62% 38% 42%;
  }
  50% {
    transform: scale(1);
    border-radius : 0
  }

  65%{
    transform: scale(1.1);
    border-radius: 64% 36% 36% 64% / 58% 27% 73% 42%;
  }

  100%{
    transform: scale(1);
    border-radius: 17% 83% 18% 82% / 81% 30% 70% 19%;
  }
`

export const StyledImage = styled.img`
  animation: ${pulseFadeAndRound} 6s ease-in-out infinite;

  @media screen and (max-width: 768px) {
    margin-top: '60px';
    width: 80%;
  }
`
