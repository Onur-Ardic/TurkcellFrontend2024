import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 My Portfolio. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
