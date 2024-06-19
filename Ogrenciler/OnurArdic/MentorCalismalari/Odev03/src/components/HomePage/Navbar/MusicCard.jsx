import { CustomImage, Link, MusicCardItem, MusicItemLeft, MusicItemRight } from './styled'

const MusicCard = ({ album }) => {
  return (
    <>
      <MusicCardItem>
        <Link href={album.external_urls.spotify}>
          <MusicItemLeft>
            <CustomImage width={'100px'} height={'100px'} src={album.images[1].url} />
          </MusicItemLeft>
          <MusicItemRight>
            <h3>{album.name}</h3>
            <span>Onur Ardıç</span>
          </MusicItemRight>
        </Link>
      </MusicCardItem>
    </>
  )
}

export default MusicCard
