import styled from "styled-components";

const StyledSkill = styled.div`
  background: ${({ theme }) => theme.gradients.gradientfirst};
  weight: 100vh;
  height: auto;
  gap: 2rem;
  padding: 2rem 0 5rem 0;

  color: ${({ theme }) => theme.icons.default.color};

  & > * {
    font-size: 7rem;
    gap: 2rem;
  }
`;
export const SkillTitle = styled.div`
  background: ${({ theme }) => theme.gradients.gradientfirst};
  margin: 3rem 0;
`;

export default StyledSkill;
