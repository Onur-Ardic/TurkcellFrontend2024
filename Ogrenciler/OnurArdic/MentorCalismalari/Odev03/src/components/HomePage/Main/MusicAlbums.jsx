import { useContext } from 'react'
import { MainContext } from '../../../Context/Context'
import { CustomImage } from '../Navbar/styled'
import { Albums, AlbumsContent, UserAlbumsWrap } from './styled'

const MusicAlbums = () => {
  const { tracks } = useContext(MainContext)

  return (
    <UserAlbumsWrap>
      {tracks?.slice(0, 4).map((track) => (
        <Albums
          display={'flex'}
          gap={'1rem'}
          alignItems={'center'}
          backgroundColor={'#303030'}
          key={track.name}
        >
          <CustomImage
            src={track.album.images[1].url}
            width={'40px'}
            height={'60px'}
            radius={'0px'}
          />
          <AlbumsContent padding={'0rem 0.3rem'}>
            <p>{track.name}</p>
            <span>{track.artists.map((artist) => artist.name).join(', ')}</span>
          </AlbumsContent>
        </Albums>
      ))}
    </UserAlbumsWrap>
  )
}

export default MusicAlbums
