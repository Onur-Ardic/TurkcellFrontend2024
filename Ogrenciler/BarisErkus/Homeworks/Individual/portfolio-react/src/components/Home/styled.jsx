import styled from "styled-components";
import { tertiary } from "../../common/colors";

export const Image = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
`;

export const Strong = styled.strong`
  font-size: 1.75rem;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 50px;
  margin: 20px 0;
`;

export const SocialMediaLink = styled.a`
  font-size: 3.5rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${tertiary};
  }
`;
