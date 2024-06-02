import React, { useState } from 'react';
import { Container, Form, Input, Button } from '../styled';
import UserCard from './UserCard';

const UserInfo = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [repoAllData, setRepoAllData] = useState(null);
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

  const fetchGitHubRepoAll = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!response.ok) {
        throw new Error('Veri bulunamadı');
      }
      const data = await response.json();
      setRepoAllData(data);
      setError(null); // Hata varsa sıfırlıyoruz
    } catch (error) {
      setRepoAllData(null);
      setError('Veri bulunamadı');
    }
  };

  const fetchGitHubRepoInfo = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=created&direction=desc`);
      if (!response.ok) {
        throw new Error('Veri bulunamadı');
      }
      const data = await response.json();
      setRepoData(data);
      setError(null); // Hata varsa sıfırlıyoruz
    } catch (error) {
      setRepoData(null);
      setError('Veri bulunamadı');
    }
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchGitHubUserInfo(username);
    await fetchGitHubRepoInfo(username);
    await fetchGitHubRepoAll(username);
  };

  return (
    <Container>
      <h1>Github Bilgileri</h1>
      <Form onSubmit={handleSubmit}>
        <Input type='text' value={username} onChange={handleInputChange} placeholder='Github Username' />
        <Button type='submit'>Verileri Getir</Button>
      </Form>
      <UserCard user={userData} error={error} repos={repoData} repoAll={repoAllData} />
    </Container>
  );
};

export default UserInfo;
