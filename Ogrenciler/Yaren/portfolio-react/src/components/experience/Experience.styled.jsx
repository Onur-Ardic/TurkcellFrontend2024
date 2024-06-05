import styled from "styled-components";

export const StyledExperienceContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 20px auto;

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    width: 90%;
  }
`;

const StyledExperience = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  gap: 5rem;
  padding: 40px;
  margin-bottom: 20px;

  height: auto;

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    flex-direction: column;
  }
`;

export const ExperienceImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.gradients.gradientfirst};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  height: 20vh;
  img {
    width: 80%;
  }
`;

export const ExperienceContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.gradients.gradientfirst};
  border-radius: 15px;
  height: 30vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  padding-bottom: 2px;

  h2 {
    margin: 0 0 10px;
  }

  p {
    margin: 0;
  }
`;
export const DateText = styled.div`
  margin-bottom: 13px;
  font-size: 1.1em;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

export const Divider = styled.div`
  position: absolute;
  left: 48%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
  z-index: -1;
`;

export const Gif = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(-400%);
  width: 150px;
`;

export default StyledExperience;
