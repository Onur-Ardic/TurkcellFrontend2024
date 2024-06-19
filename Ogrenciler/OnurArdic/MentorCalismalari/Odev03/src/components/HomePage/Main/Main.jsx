import Artist from './Artist'
import Foryou from './Foryou'
import MusicAlbums from './MusicAlbums'
import { MainWrapper } from './styled'

const Main = () => {
  return (
    <>
      <MainWrapper>
        <MusicAlbums />
        <Foryou />
        <Artist />
      </MainWrapper>
    </>
  )
}

export default Main
