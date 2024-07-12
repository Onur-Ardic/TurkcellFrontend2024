import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2023 My E-Commerce. All rights reserved.</p>
    </FooterContainer>
  );
}
