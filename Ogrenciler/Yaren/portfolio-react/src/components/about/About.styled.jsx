import styled from "styled-components";

const StyledAbout = styled.div`
  background-color: ${({ theme }) => theme.colors.pastelblue};
  padding: 4rem 0;

  background-color: #ffdae8;

  & > div {
    flex-grow: 2;
    flex-basis: 0;
    margin: 2rem;
  }
`;
export const Icons = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  color: #666;
  margin: 0rem;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid black;
  padding-bottom: 0.5rem;
`;
export const AboutSection = styled.div`
  margin: 2rem;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding: 1.5rem;
  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    width: calc(50% - 1rem);
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
  }
`;

export const AboutTitle = styled.h2`
  color: #333;
`;

export const AboutParagraph = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
  margin-right: 2rem;
  text-align: justify;
`;

export default StyledAbout;
