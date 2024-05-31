import React, { useState } from 'react';

const UserInfo = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchGitHubUserInfo = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching GitHub user data:', error);
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
    <div>
        <h1>Github İnfo</h1>
        <form>
        <input type='text' value={username} onChange={handleInputChange} placeholder='Github Adı'/>
        <button type='submit' onClick={handleSubmit}>Verilerimi Çek</button>
        </form>
        {userData &&(
            <div>
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
            <img src={userData.avatar_url} alt={userData.name} style={{ width: '100px' }} />
            </div>
  )}
    </div>
  );
 
};

export default UserInfo;
 