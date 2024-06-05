import { StyledImage } from './styled'

const HeroSectionRight = ({ user }) => {
  const { avatar_url, name } = user
  return (
    <>
      <StyledImage src={avatar_url} alt={name} />
    </>
  )
}

export default HeroSectionRight
