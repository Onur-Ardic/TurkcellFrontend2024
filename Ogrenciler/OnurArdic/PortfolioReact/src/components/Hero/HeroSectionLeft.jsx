import { Links } from '../baseStyle'
import { InfoWrapper, UserName } from './styled'

const HeroSectionLeft = ({ user }) => {
  const { name, followers, following, bio, public_repos } = user
  return (
    <div className="user-info pacifico">
      <UserName className="name">{name}</UserName>
      <span style={{ fontSize: '20px', textAlign: 'center' }}>{bio}</span>
      <InfoWrapper>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Repos :{public_repos}</p>
      </InfoWrapper>

      <div
        className="social-media-links"
        style={{ display: 'flex', gap: '20px', fontSize: '30px', marginTop: '20px' }}
      >
        <Links
          href="https://github.com/Onur-Ardic"
          target="blank"
          style={{ color: '#fff', border: '1px solid #ffff', padding: '5px 20px' }}
        >
          <i className="bi bi-github"></i>
        </Links>
        <Links
          href="https://x.com/OnurArdic0"
          target="blank"
          style={{ color: '#fff', border: '1px solid #ffff', padding: '5px 20px' }}
        >
          <i className="bi bi-twitter-x"></i>
        </Links>
        <Links
          href="https://www.linkedin.com/in/onur-ardic/"
          target="blank"
          style={{ color: '#fff', border: '1px solid #ffff', padding: '5px 20px' }}
        >
          <i className="bi bi-linkedin"></i>
        </Links>
        <Links
          href="https://www.instagram.com/onurardc_/"
          target="blank"
          style={{ color: '#fff', border: '1px solid #ffff', padding: '5px 20px' }}
        >
          <i className="bi bi-instagram"></i>
        </Links>
      </div>
    </div>
  )
}

export default HeroSectionLeft
