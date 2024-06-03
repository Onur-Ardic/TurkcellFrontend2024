import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.header};
  width: 100%;
  height: auto;
  gap: 2rem;
  padding: 1rem 0;

  & > * {
    font-size: ${({ theme }) => theme.icons.default.size};
  }
`;

export const FooterIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  color: ${({ theme }) => theme.icons.default.color};
  border-bottom: 2px solid black;
  padding-bottom: 0.5rem;
`;

export default StyledFooter;
