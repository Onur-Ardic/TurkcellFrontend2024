import  { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const url = "https://newsapi.org/v2/everything?q=fatih-terim-neden&from=2024-05-07&sortBy=publishedAt";

  const readData = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'apikey 5c66f497a1074197b3d427400e130535'
        }
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="App">
      {data ? (
        <ul>
          {data.articles.map((article) => (
            <li key={article.url}>{article.title}</li>
          ))}
        </ul>
      ) : <p>loading...</p>}
    </div>
  );
}

export default App;
