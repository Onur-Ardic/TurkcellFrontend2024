import { StyledImage } from './styled'

const HeroSectionRight = ({ user }) => {
  const { avatar_url, name } = user
  return (
    <section>
      <StyledImage src={avatar_url} alt={name} />
    </section>
  )
}

export default HeroSectionRight
