import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 3);
  background-color: white;
  gap: 2rem;
  padding: 40px; /* İçerik boşluğunu biraz azalttık */
  flex-direction: ${({ odd }) => odd || "row"};
  margin: 20px; /* Kartların etrafına boşluk ekledik */
  img {
    width: 80%;
  }

  & > div {
    flex-grow: 2;
    flex-basis: 0;
  }

  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;

export default StyledCard;
