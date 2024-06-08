import { Outlet } from 'react-router-dom'
import { NewsWrapper } from '../../CustomStyled'

const News = ({ onData }) => {
  console.log(onData)
  return (
    <>
      <News className="news">
        <NewsWrapper className="news-wrapper container">
          <h3>Tüm Haberler</h3>
        </NewsWrapper>
      </News>
      <Outlet />
    </>
  )
}

export default News
