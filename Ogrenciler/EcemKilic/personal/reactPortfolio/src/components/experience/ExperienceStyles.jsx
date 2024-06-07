import styled, { keyframes } from 'styled-components';

const swayAnimation = keyframes`
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-5px);
  }
`;

export const ExperienceContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

export const ExperienceTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const ExperienceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ExperienceItemRight = styled.li`
  width: 50%;
  margin-bottom: 30px;
  background: #D5CEA3;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20rem;
  animation: ${swayAnimation} 2s infinite alternate;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const ExperienceItemLeft = styled.li`
  width: 50%;
  margin-bottom: 30px;
  background: #D5CEA3;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20rem;
  animation: ${swayAnimation} 2s infinite alternate;
  animation-delay: 1s;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const ExperiencePosition = styled.h3`
  font-weight: bold;
  font-size: 20px;
  color: #3C2A21;
`;

export const ExperienceInfo = styled.p`
  line-height: 1.5;
  font-size: 18px;
  color: #3C2A21;
  margin: 5px 0;
`;

export const ExperienceYear = styled.p`
  font-size: 16px;
  color: #666;
`;

export const LeftColumn = styled.div`
  align-self: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(50% - 10px);
  }
`;

export const RightColumn = styled.div`
  align-self: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(50% - 10px);
  }
`;