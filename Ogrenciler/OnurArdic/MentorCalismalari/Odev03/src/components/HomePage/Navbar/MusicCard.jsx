import { CustomImage, Link, MusicCardItem, MusicItemLeft, MusicItemRight } from './styled'

const MusicCard = () => {
  return (
    <>
      <MusicCardItem>
        <Link>
          <MusicItemLeft>
            <CustomImage width={'100px'} height={'100px'} src="https://picsum.photos/200/300" />
          </MusicItemLeft>
          <MusicItemRight>
            <h3>Müzik Adı</h3>
            <span>Onur Ardıç</span>
          </MusicItemRight>
        </Link>
      </MusicCardItem>
    </>
  )
}

export default MusicCard
