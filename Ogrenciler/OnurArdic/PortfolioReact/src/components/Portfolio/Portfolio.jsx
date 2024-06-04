import RepoCard from './RepoCard'
import { CardWrapper } from './styled'

const Portfolio = ({ repos }) => {
  return (
    <>
      <CardWrapper style={{ padding: '50px' }} className="josefin-sans " id="Portfolio">
        {repos.map((repos, index) => (
          <RepoCard key={index} repos={repos} />
        ))}
      </CardWrapper>
    </>
  )
}

export default Portfolio
