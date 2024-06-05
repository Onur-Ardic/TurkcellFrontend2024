import styled from "styled-components";
import { tertiary } from "../../../../common/colors";

export const A = styled.a`
  font-size: 1.25rem;
  transition: 0.3s;
  font-weight: 500;
  &:hover {
    color: ${tertiary};
  }
  &:focus {
    outline: 2px solid ${tertiary};
    outline-offset: 8px;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
