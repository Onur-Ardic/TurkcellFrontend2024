import Artist from './Artist'
import Foryou from './Foryou'
import MusicAlbums from './MusicAlbums'
import { MainWrapper } from './styled'

const Main = () => {
  return (
    <>
      <MainWrapper>
        <MusicAlbums></MusicAlbums>
        <Foryou></Foryou>
        <Artist></Artist>
      </MainWrapper>
    </>
  )
}

export default Main
