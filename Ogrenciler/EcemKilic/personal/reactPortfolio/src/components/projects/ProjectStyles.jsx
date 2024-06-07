import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 10px;
    & > * {
      flex: calc(50% - 10px);
      margin-bottom: 20px;
    }
  }
`;