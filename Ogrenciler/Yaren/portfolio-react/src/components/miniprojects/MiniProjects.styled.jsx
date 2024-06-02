import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.pastelblue};
  justify-content: center; /* Merkezde hizalamak için */
`;

export const ProjectCard = styled.div`
  width: 300px; /* Kart boyutunu büyüttük */
  height: 300px; /* Kart boyutunu büyüttük */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
