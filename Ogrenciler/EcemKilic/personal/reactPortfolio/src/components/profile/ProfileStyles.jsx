import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
`;

export const Title = styled.h1`
  font-weight: 600;
  color: #E5E5CB;
`;

export const Subtitle = styled.span`
  font-size: 16px;
  color: #E5E5CB;
`;

export const Description = styled.p`
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
  color: #E5E5CB;
`;

export const Links = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
`;

export const Link = styled.a`
display: inline-block;
background-color: #D5CEA3;
color: #3C2A21;
padding: 10px 20px;
border: none;
border-radius: 5px;
font-size: 16px;
font-weight: 500;
text-decoration: none;
cursor: pointer;
transition: background-color 0.3s, color 0.3s;
margin-top: 10px;
animation: wiggle 2s linear infinite;

&:hover {
  background-color: #3C2A21;
  color: #D5CEA3;
}

@keyframes wiggle {
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
}
`;