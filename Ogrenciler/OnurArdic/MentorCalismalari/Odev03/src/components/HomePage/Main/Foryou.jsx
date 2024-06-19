import { useContext } from 'react'
import { CustomImage } from '../Navbar/styled'
import { Albums, AlbumsContent, Flexible, ForYouWrap } from './styled'
import { MainContext } from '../../../Context/Context'

const Foryou = () => {
  const { albums } = useContext(MainContext)
  return (
    <ForYouWrap>
      <h1>Onur Ardıç için derlendi</h1>
      <Flexible display={'flex'} gap={'1rem'} justifyContent={'space-around'}>
        {albums
          ?.slice(0, 3)
          .reverse()
          .map((album) => (
            <Albums key={album.name}>
              <CustomImage
                src={album.images[1].url}
                width={'150px'}
                height={'150px'}
                radius={'10px'}
              />

              <AlbumsContent>
                <p>{album.name}</p>
              </AlbumsContent>
            </Albums>
          ))}

        <Albums>
          <CustomImage
            src="https://picsum.photos/200/300"
            width={'150px'}
            height={'150px'}
            radius={'10px'}
          />
          <AlbumsContent>
            <p>Onur Ardıç</p>
          </AlbumsContent>
        </Albums>
      </Flexible>
    </ForYouWrap>
  )
}

export default Foryou
