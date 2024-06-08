import { useState, useEffect } from 'react'
import {NewsContainer, News, NewCard } from './styled'
const NewsList = ({ category }) => {

    const [news, setNews] = useState([])

    useEffect(() => {
        const getNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=20f8cad1fd6c48dfb399285ed0d0449b`)
                const data = await response.json()
                setNews(data.articles)
            }
            catch (error) {
                console.error("Error fetching the news articles", error);
            }
        }
        console.log(news)
        getNews()
    }, [])



    return (
        <NewsContainer>
            <h2>Haberler</h2>
            {
                <News>
                    {news?.map((article, index) => (
                        <NewCard key={index}>
                            <a href={article.url} target="_blank">
                                <img src={article.urlToImage} />
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                                <i>{article.publishedAt}</i>
                            </a>
                        </NewCard>
                    ))}
                </News>
            }
        </NewsContainer>
    )
}

export default NewsList
