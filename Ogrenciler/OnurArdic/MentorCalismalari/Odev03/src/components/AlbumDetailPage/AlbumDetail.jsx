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
import { useContext } from 'react'
import { MainContext } from '../../Context/Context'

const AlbumDetail = () => {
  const { tracks, setCurrentTrackInfo } = useContext(MainContext)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const handleTrack = (track) => {
    setCurrentTrackInfo({
      uri: track.uri,
      name: track.name,
      artists: track.artists.map((artist) => artist.name).join(', '),
      duration_ms: track.duration_ms,
      album: track.album,
    })
  }
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
          {tracks?.slice(0, 5).map((track, index) => (
            <MusicRow key={index} onClick={() => handleTrack(track)}>
              <MusicItem>{index + 1}</MusicItem>
              <MusicItem>
                <CustomImage src={track.album.images[1].url} width={'60px'} height={'60px'} />
                <p>
                  {track.name} {index + 1}
                </p>
              </MusicItem>
              <MusicItem>{track.album.release_date}</MusicItem>
              <MusicItem>{formatTime(track.duration_ms / 1000)}</MusicItem>
            </MusicRow>
          ))}
        </MusicList>
      </AlbumsMusicList>
    </AlbumDetailWrapper>
  )
}

export default AlbumDetail
