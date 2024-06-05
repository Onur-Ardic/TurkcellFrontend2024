import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 2rem;

  width: 100%;
  height: auto;

  padding: 1rem 0;

  background: ${({ theme }) => theme.gradients.gradientthird};
`;

export const Gif = styled.img`
  width: 200px;
  height: auto;
  margin-right: 5rem;

  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    width: 150px;
    margin-right: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    width: 100px;
    margin-right: 0;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  font-size: 3rem;
  gap: 3rem;
  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: ${({ theme }) => theme.colors.pastelblue};
    }

    svg {
      margin-right: 1.5rem;
      color: ${({ theme }) => theme.colors.icons}; /
    }
  }
`;

export default StyledFooter;
