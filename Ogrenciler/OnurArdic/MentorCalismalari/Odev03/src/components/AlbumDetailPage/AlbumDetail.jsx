import { useParams } from 'react-router-dom'
import {
  AlbumDetailWrapper,
  AlbumsMusicList,
  AlbumTop,
  MusicItem,
  MusicHeader,
  MusicList,
  MusicHeaderItem,
  MusicRow,
} from './styled'
import { CustomImage } from '../HomePage/Navbar/styled'
import { AlbumsContent } from '../HomePage/Main/styled'

const AlbumDetail = () => {
  const { id } = useParams()

  return (
    <AlbumDetailWrapper>
      <AlbumTop>
        <CustomImage src="https://picsum.photos/200/300" width={'250px'} height={'250px'} />
        <AlbumsContent>
          <h4>Onur Ardıç</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum culpa animi
            dicta. Cupiditate, amet!
          </p>
        </AlbumsContent>
      </AlbumTop>

      <AlbumsMusicList>
        <MusicHeader>
          <MusicHeaderItem>#</MusicHeaderItem>
          <MusicHeaderItem>Title</MusicHeaderItem>
          <MusicHeaderItem>Added Date</MusicHeaderItem>
          <MusicHeaderItem>Duration</MusicHeaderItem>
        </MusicHeader>

        <MusicList>
          {[...Array(6)].map((_, index) => (
            <MusicRow key={index}>
              <MusicItem>{index + 1}</MusicItem>
              <MusicItem>
                <CustomImage src="https://picsum.photos/60/60" width={'60px'} height={'60px'} />
                <p>Song Title {index + 1}</p>
              </MusicItem>
              <MusicItem>2023-06-20</MusicItem>
              <MusicItem>3:45</MusicItem>
            </MusicRow>
          ))}
        </MusicList>
      </AlbumsMusicList>
    </AlbumDetailWrapper>
  )
}

export default AlbumDetail
