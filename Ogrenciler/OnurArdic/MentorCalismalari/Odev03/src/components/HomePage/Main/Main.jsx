import { Route, Routes, useLocation } from 'react-router-dom'
import Artist from './Artist'
import Foryou from './Foryou'
import MusicAlbums from './MusicAlbums'
import { MainWrapper } from './styled'
import AlbumDetail from '../../AlbumDetailPage/AlbumDetail'

const Main = () => {
  const location = useLocation()

  const isAlbumDetailPage = location.pathname.startsWith('/albums/')
  return (
    <>
      <Routes>
        <Route path="/albums/:id" element={<AlbumDetail />} />
      </Routes>

      {!isAlbumDetailPage && (
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
