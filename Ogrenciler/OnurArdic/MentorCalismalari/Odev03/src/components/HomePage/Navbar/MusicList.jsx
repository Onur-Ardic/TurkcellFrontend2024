import { useContext } from 'react'
import MusicCard from './MusicCard'
import { Icon, IconWrapper, MusicListWrapper } from './styled'
import { MainContext } from '../../../Context/Context'

const MusicList = () => {
  const { albums } = useContext(MainContext)

  return (
    <>
      <IconWrapper>
        <Icon className="bi bi-search" fontSize={'20px'} />
        <Icon className="bi bi-list" fontSize={'20px'} color={'#f9f9f9f9'}>
          Listem
        </Icon>
      </IconWrapper>

      <MusicListWrapper>
        {albums?.map((album) => {
          return <MusicCard key={album.id} album={album} />
        })}
      </MusicListWrapper>
    </>
  )
}

export default MusicList
