import Button from '../../atoms/Button'

const RepositoryCard = () => {
  return (
    <>
      <div className="card">
        <div className="card-left">
          <h3 className="title">Aleyna</h3>
          <span>Private</span>
          <div>
            <p className="languange">Barış</p>
            <span className="date">Onur</span>
          </div>
        </div>

        <div className="card-right">
          <Button />
        </div>
      </div>
    </>
  )
}

export default RepositoryCard
