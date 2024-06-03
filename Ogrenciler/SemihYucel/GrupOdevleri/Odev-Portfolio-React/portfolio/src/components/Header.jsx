import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 6rem 2rem;
  color: #fff;
  text-align: center;
  background-image: url('https://images.unsplash.com/photo-1556761175-129418cb2dfe'); /* Header için arka plan resmi */
  background-size: cover;
  background-position: center;
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
    <h1>Semih YÜCEL</h1>
    <p>semihycl0@gmail.com</p>
  </HeaderContainer>
);

export default Header;
