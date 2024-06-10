import React from 'react'
import { HeroArea, HeroImg, HeroSpan, HeroTextArea, HeroTitle, HeroText, HeroButton } from '../style/style.module'

const Hero = ({ data, loading }) => {
  return (<>
    {!loading && data.length > 0 &&
      <HeroArea>
        <HeroImg src={data[19].urlToImage ? data[19].urlToImage : 'https://st.depositphotos.com/1011646/1255/i/450/depositphotos_12553000-stock-photo-breaking-news-screen.jpg'} alt="hero" />
        <HeroTextArea>
          <HeroSpan>{data[19].author}</HeroSpan>
          <HeroTitle>{data[19].title}</HeroTitle>
          <HeroText>{data[19].description}</HeroText>
          <a href={data[19].url} target='_blank'><HeroButton>Read More</HeroButton></a>
        </HeroTextArea>
      </HeroArea>
    }
  </>)
}

export default Hero