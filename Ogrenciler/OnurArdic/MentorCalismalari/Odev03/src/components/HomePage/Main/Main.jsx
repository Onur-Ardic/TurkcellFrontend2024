import { Route, Routes, useLocation } from 'react-router-dom'
import Artist from './Artist'
import Foryou from './Foryou'
import MusicAlbums from './MusicAlbums'
import { MainWrapper } from './styled'
import AlbumDetail from '../../AlbumDetailPage/AlbumDetail'
import Search from '../../SearchPage/Search'

const Main = () => {
  const location = useLocation()

  const isAlbumDetailPage = location.pathname.startsWith('/albums/')
  const isSearchPage = location.pathname.startsWith('/search')

  return (
    <>
      <Routes>
        <Route path="/albums/:id" element={<AlbumDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      {!isAlbumDetailPage && !isSearchPage && (
        <MainWrapper>
          <MusicAlbums />
          <Foryou />
          <Artist />
        </MainWrapper>
      )}
    </>
  )
}

export default Main
