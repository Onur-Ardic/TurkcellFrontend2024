import { Links } from '../baseStyle'
import { Card } from './styled'

const RepoCard = ({ repos }) => {
  return (
    <Card>
      <h1>{repos.name}</h1>
      <p>{repos.description}</p>
      <p>{repos.language}</p>

      <div className="btn" style={{ marginTop: '30px' }}>
        <Links href={repos.html_url} target="_blank" rel="noopener noreferrer">
          Projeye Git
        </Links>
      </div>
    </Card>
  )
}

export default RepoCard
