import { useContext } from 'react'
import { CustomImage } from '../Navbar/styled'
import { Albums, AlbumsContent, ArtisWrap, Flexible } from './styled'
import { MainContext } from '../../../Context/Context'

const Artist = () => {
  const { artist } = useContext(MainContext)

  let artistList = []

  if (artist && typeof artist === 'object' && !Array.isArray(artist)) {
    if (Array.isArray(artist.artists)) {
      artistList = artist.artists
    } else {
      artistList = Object.values(artist)
    }
  } else if (Array.isArray(artist)) {
    artistList = artist
  }

  return (
    <ArtisWrap>
      <h3>En sevdiğin sanatçılar</h3>
      <Flexible display={'flex'} flexWrap={'wrap'} gap={'25px'} justifyContent={'space-between'}>
        {artistList.length > 0 ? (
          artistList.slice(0, 4).map((artist) => (
            <Albums
              key={artist.id}
              width={'max-content'}
              gap={'20px'}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <CustomImage
                src={artist.images?.[1].url || 'https://picsum.photos/200/300'}
                width={'160px'}
                height={'160px'}
                radius={'50%'}
              />
              <AlbumsContent>
                <p>{artistList[6]}</p>
              </AlbumsContent>
            </Albums>
          ))
        ) : (
          <p>Sanatçı verisi bulunamadı.</p>
        )}
      </Flexible>
    </ArtisWrap>
  )
}

export default Artist
