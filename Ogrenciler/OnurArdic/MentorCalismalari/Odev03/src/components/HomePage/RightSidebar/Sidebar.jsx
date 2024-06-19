import { useContext } from 'react'
import { Albums, AlbumsContent, SidebarWrapper } from '../Main/styled'
import { CustomImage } from '../Navbar/styled'
import { MainContext } from '../../../Context/Context'

const Sidebar = () => {
  const { currentTrackInfo } = useContext(MainContext)

  return (
    <>
      {currentTrackInfo && (
        <SidebarWrapper>
          <Albums>
            <CustomImage
              src={currentTrackInfo.album.images[2].url}
              width={'100%'}
              height={'200px'}
            />
            <AlbumsContent>
              <h1>{currentTrackInfo.name}</h1>
              <p>{currentTrackInfo.artist}</p>
            </AlbumsContent>
          </Albums>

          <hr />
        </SidebarWrapper>
      )}
    </>
  )
}

export default Sidebar
