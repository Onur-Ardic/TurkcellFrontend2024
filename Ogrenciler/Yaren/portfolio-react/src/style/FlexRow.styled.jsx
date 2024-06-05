import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 3rem;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default FlexRow;
