import styled from "styled-components";

const StyledSkill = styled.div`
  background-color: ${({ theme }) => theme.colors.pastelpink};
  weight: 100vh;
  height: auto;
  gap: 2rem;
  padding: 3rem 0;

  & > * {
    font-size: 5rem;
    margin: 0 1rem;
  }
`;

export const SkillIcons = styled.div`
  width: 100%;

  color: ${({ theme }) => theme.icons.default.color};
  border-bottom: 2px solid black;
  padding-bottom: 0.5rem;
`;

export default StyledSkill;
