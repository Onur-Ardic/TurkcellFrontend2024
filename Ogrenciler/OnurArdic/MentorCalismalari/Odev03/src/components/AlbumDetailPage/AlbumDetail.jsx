import { useParams } from 'react-router-dom'

const AlbumDetail = () => {
  const { id } = useParams()

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iste non incidunt obcaecati{id}
    </div>
  )
}

export default AlbumDetail
