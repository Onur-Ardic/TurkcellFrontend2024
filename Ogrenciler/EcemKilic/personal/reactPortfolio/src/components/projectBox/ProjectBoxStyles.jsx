import styled from 'styled-components';

export const Box = styled.div`
  background-color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(213, 206, 163, 0.5);
  border-radius: 10px;
  overflow: hidden;
  width: calc(33.333% - 20px);
  box-sizing: border-box;
  transition: transform 0.3s;
  &:hover {
    box-shadow: 0 8px 12px rgba(60, 42, 33, 0.15);
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: auto;
  height: 200px;
  align-self: center;
`;

export const Content = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  margin: 0 0 10px;
  color: #3C2A21;
  font-weight: 500;
`;