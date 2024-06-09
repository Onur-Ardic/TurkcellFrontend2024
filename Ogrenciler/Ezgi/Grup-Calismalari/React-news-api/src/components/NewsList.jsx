import { useState, useEffect } from "react";
import { NewsContainer, News, NewCard, FormGroup } from "./styled";
const NewsList = ({ category }) => {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("us");

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=53f6034c41ba4d92a54743e07f2ec07f`
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching the news articles", error);
      }
    };

    getNews();
  }, [category, country]);

  return (
    <NewsContainer>
      <FormGroup>
        <label for="country">Ülke Seçiniz</label>

        <select
          id="country"
          onChange={(e) => setCountry(e.target.value)}
          name="country"
          class="form-control"
        >
          <option value="us">United States</option>

          <option value="tr">Turkey</option>

          <option value="fr">French</option>
          <option value="de">Germany</option>
        </select>
      </FormGroup>
      <h2>Haberler</h2>
      {
        <News>
          {news?.map((article, index) => (
            <NewCard key={index}>
              <img
                src={
                  article.urlToImage
                    ? article.urlToImage
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKETClZdmQpZspywCU7Dki5JiIybQq0wj0IQ&s"
                }
              />
              <a href={article.url} target="_blank">
                
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
