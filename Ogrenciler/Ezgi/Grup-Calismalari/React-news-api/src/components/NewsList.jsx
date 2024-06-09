import { useState, useEffect } from "react";
import { NewsContainer, News, NewCard } from "./styled";
const NewsList = ({ category }) => {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("tr");

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=20f8cad1fd6c48dfb399285ed0d0449b`
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching the news articles", error);
      }
    };
    // console.log(news);
    getNews();
  }, [category, country]);

  return (
    <NewsContainer>
      <label for="country">Ülke Seçiniz</label>

      <select
        id="country"
        onChange={(e) => setCountry(e.target.value)}
        name="country"
        class="form-control"
      >
        <option value="tr">Turkey</option>

        <option value="us">United States</option>
        <option value="fr">French</option>
        <option value="de">Germany</option>
      </select>
      <h2>Haberler</h2>
      {
        <News>
          {news?.map((article, index) => (
            <NewCard key={index}>
              <a href={article.url} target="_blank">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKETClZdmQpZspywCU7Dki5JiIybQq0wj0IQ&s" />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <i>{article.publishedAt.substring(0, 10)}</i>
              </a>
            </NewCard>
          ))}
        </News>
      }
    </NewsContainer>
  );
};

export default NewsList;
