import styled from "styled-components";
import { tertiary } from "../../../../common/colors";

export const A = styled.a`
  font-size: 1.5rem;
  transition: 0.3s;
  &:hover {
    color: ${tertiary};
  }
  &:focus {
    outline: 2px solid ${tertiary};
    outline-offset: 8px;
  }
`;
