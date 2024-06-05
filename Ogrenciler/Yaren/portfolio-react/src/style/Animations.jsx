import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 16ch;
  }
`;

export const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const octocatWave = keyframes`
  0%, 100% { transform: rotate(0); }
  20%, 60% { transform: rotate(-35deg); }
  40%, 80% { transform: rotate(10deg); }
`;

export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
