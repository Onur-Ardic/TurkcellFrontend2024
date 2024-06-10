import {
  NewsCards, NewsSpan, NewsTitle, HeroText, HeroButton, NewsCardImg, CardContent
} from '../style/style.module.jsx'

const NewsCard = ({ img, category, title, content, to }) => {
  return (

    <NewsCards>
      <CardContent>
      <NewsCardImg src={img? img : 'https://st.depositphotos.com/1011646/1255/i/450/depositphotos_12553000-stock-photo-breaking-news-screen.jpg'} />
      <NewsSpan>{category ? category : 'Default'}</NewsSpan>
      <NewsTitle>{title}</NewsTitle>
      <HeroText>{content ? content : 'Description Not Found!'}</HeroText>
      </CardContent>
      <a href={to} target='_blank'><HeroButton>Read More</HeroButton></a>
    </NewsCards>

  )
}

export default NewsCard