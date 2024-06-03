import styled, { keyframes } from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  max-width: 1100px;
  margin: 0 auto;
`
export const UserName = styled.h3`
  font-size: 60px;
  font-weight: 700;
  font-family: 'Pacifico', cursive;
`

export const InfoWrapper = styled.div`
  display: flex;
  gap: 20px;

  p {
    font-size: 30px;
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
`
