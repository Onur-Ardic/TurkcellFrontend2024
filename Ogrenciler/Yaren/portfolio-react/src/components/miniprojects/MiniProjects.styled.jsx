import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  background: ${({ theme }) => theme.gradients.gradientsecond};

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    padding: 3rem 0;
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    padding: 2rem 0;
  }
`;

export const ProjectCard = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.1);
    z-index: 10;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    width: 80%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    width: 90%;
    height: auto;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;

  ${ProjectCard}:hover & {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    height: auto;
  }
`;

export default ProjectContainer;
