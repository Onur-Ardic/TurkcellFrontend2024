import React, { useState } from 'react';
import { Container, Form, Input, Button } from '../styled';
import UserCard from './UserCard';

const UserInfo = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchGitHubUserInfo = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Veri bulunamadı');
      }
      const data = await response.json();
      setUserData(data);
      setError(null); // Hata varsa sıfırlıyoruz
    } catch (error) {
      setUserData(null);
      setError('Veri bulunamadı');
    }
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGitHubUserInfo(username);
  };

  return (
    <Container>
      <h1>Github Bilgileri</h1>
      <Form onSubmit={handleSubmit}>
        <Input type='text' value={username} onChange={handleInputChange} placeholder='Github Username' />
        <Button type='submit'>Verileri Getir</Button>
      </Form>
      <UserCard user={userData} error={error} />
    </Container>
  );
};

export default UserInfo;
