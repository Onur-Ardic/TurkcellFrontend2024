import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import { NewsArea } from '../style/style.module'
import { getNewsByCategory } from '../Api/Api'

const NewsCategoryView = () => {
  const { category } = useParams()
  const [loading, setLoading] = useState(false);
  const [catData, setCatData] = useState([]);
  const getDataByCategory = async () => {
    try {
      setLoading(true);
      const data = await getNewsByCategory(category);
      setCatData(data.sources);
      console.log(catData)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getDataByCategory();
  },[category])

  return (
    <NewsArea>
        {!loading && catData.length > 0 && catData.map((item, index) =>
          <NewsCard key={index} img={item.urlToImage} category={item.category} title={item.title} content={item.description} to={item.url} />
        )}
      </NewsArea>
  )
}

export default NewsCategoryView