import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 6rem 2rem; /* Paddingi artırarak içeriğin daha iyi görünmesini sağladık */
  color: #fff;
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
`;

const Header = () => (
  <HeaderContainer>
    <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
    <h1>Ad Soyad</h1>
    <p>email@example.com</p>
  </HeaderContainer>
);

export default Header;
