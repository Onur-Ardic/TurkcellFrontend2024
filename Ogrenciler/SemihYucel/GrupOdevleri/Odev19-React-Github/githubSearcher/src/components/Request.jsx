const fetchGitHubRepoInfo = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?_limit=5`);
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