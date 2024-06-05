import styled from "styled-components";
import { tertiary } from "../../common/colors";

export const Image = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 50px;
  margin: 10px 0;
  flex-wrap: wrap;
`;

export const SocialMediaLink = styled.a`
  font-size: 3.5rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${tertiary};
  }
  &:focus {
    outline: 3px solid ${tertiary};
    outline-offset: 4px;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
