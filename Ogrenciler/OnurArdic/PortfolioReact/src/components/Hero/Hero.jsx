import { HeroContainer } from './styled'
import HeroSectionLeft from './HeroSectionLeft'
import HeroSectionRight from './HeroSectionRight'

const Hero = ({ user, repos }) => {
  return (
    <section
      className="hero-wrapper"
      style={{ backgroundColor: '#121212', color: '#ffff' }}
      id="Home"
    >
      <HeroContainer className="hero">
        <HeroSectionLeft user={user} />
        <HeroSectionRight user={user} repos={repos} />
      </HeroContainer>
    </section>
  )
}

export default Hero
