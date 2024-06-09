import React from 'react'
import Hero from '../components/Hero'
import NewsCard from '../components/NewsCard'
import { NewsArea } from '../style/style.module'

const HomeView = ({ data, loading,searchData }) => {
  
  return (
    <>
      <Hero data={data} loading={loading} />
      <hr />
      <NewsArea>
      {searchData && searchData.map((item, index) =>
          <NewsCard key={index} img={item.urlToImage} category={item.author} title={item.title} content={item.description} to={item.url} />
        )}
        {data.map((item, index) =>
          <NewsCard key={index} img={item.urlToImage} category={item.author} title={item.title} content={item.description} to={item.url} />
        )}
      </NewsArea>

    </>
  )
}

export default HomeView