import { useContext } from 'react'
import { CustomImage } from '../Navbar/styled'
import { Albums, AlbumsContent, ArtisWrap, Flexible } from './styled'
import { MainContext } from '../../../Context/Context'

const Artist = () => {
  const { artist } = useContext(MainContext)

  // Gelen artist verisinin konsolda kontrol edilmesi
  console.log('Artists data from context:', artist)

  // Artist verisinin uygun bir diziye dönüştürülmesi (gerekiyorsa)
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
      <Flexible display={'flex'} gap={'1rem'} justifyContent={'space-around'}>
        {artistList.length > 0 ? (
          artistList.slice(0, 4).map((artist) => (
            <Albums key={artist.id}>
              <CustomImage
                src={artist.images?.[1].url || 'https://picsum.photos/200/300'}
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
