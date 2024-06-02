import { keyframes } from "styled-components";

// Animasyon tanımları
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
