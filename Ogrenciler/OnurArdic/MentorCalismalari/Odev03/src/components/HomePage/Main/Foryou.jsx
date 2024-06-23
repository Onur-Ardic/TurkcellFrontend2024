import { useContext } from 'react'
import { CustomImage } from '../Navbar/styled'
import { Albums, AlbumsContent, Flexible, ForYouWrap } from './styled'
import { MainContext } from '../../../Context/Context'
import { NavLink } from 'react-router-dom'

const Foryou = () => {
  const { albums } = useContext(MainContext)

  return (
    <ForYouWrap>
      <h1>Onur Ardıç için derlendi</h1>
      <Flexible display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
        {albums
          ?.slice(0, 6)
          .reverse()
          .map((album) => (
            <Albums
              key={album.id}
              alignItems={'start'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              gap={'0'}
              width={'150px'}
            >
              <NavLink to={`/albums/${album.id}`}>
                <CustomImage
                  src={album.images[1].url}
                  width={'100%'}
                  height={'110px'}
                  radius={'10px'}
                />
              </NavLink>

              <AlbumsContent fontSize={'14px'} padding={'0'}>
                <p>{album.name}</p>
              </AlbumsContent>
            </Albums>
          ))}
      </Flexible>
    </ForYouWrap>
  )
}

export default Foryou
