import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  padding: ${props => props.padding ? props.padding : '5px'};
  border-radius: 50%;
  background-color: var(--background-color);
  color: var(--primary-text-color);
  &:hover {
    background-color: var(--foreground-color);
    color: var(--secondary-text-color);
  }
`;

export const LabelInput = styled.label`
  color: var(--primary-text-color);
`;