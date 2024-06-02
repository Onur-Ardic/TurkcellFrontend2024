import styled from "styled-components";

const StyledExperience = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  gap: 2rem;
  padding: 40px;
  flex-direction: ${({ odd }) => odd || "row"};
  position: relative;
  width: 80%;
  margin: 20px auto;
  height: auto;

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    flex-direction: column;
    width: 90%;
  }
`;

export const ExperienceImage = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
  }
`;

export const ExperienceContent = styled.div`
  flex-grow: 1;
  flex-basis: 0;

  h2 {
    margin: 0 0 10px;
  }

  p {
    margin: 0;
  }
`;

export const Divider = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background-color: #ccc;

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    display: none;
  }
`;

export default StyledExperience;
