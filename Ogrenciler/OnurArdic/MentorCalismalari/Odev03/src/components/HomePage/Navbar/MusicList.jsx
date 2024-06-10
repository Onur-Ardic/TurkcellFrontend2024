import MusicCard from './MusicCard'
import { Icon, IconWrapper, MusicListWrapper } from './styled'

const MusicList = () => {
  return (
    <>
      <IconWrapper>
        <Icon className="bi bi-search" fontSize={'20px'} />
        <Icon className="bi bi-list" fontSize={'20px'} color={'#f9f9f9f9'}>
          Listem
        </Icon>
      </IconWrapper>

      <MusicListWrapper>
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </MusicListWrapper>
    </>
  )
}

export default MusicList
