import { Modal, Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function MovieModal({ show, handleClose, handleSave, movie }) {
  const [movieData, setMovieData] = useState({
    name: '',
    author: '',
    category: '',
    releaseDate: '',
    url: '',
  })

  useEffect(() => {
    if (movie) {
      setMovieData(movie)
    } else {
      setMovieData({
        name: '',
        author: '',
        category: '',
        releaseDate: '',
        url: '',
      })
    }
  }, [movie])

  const handleChange = (e) => {
    const { name, value } = e.target
    setMovieData({ ...movieData, [name]: value })
  }

  const handleSubmit = () => {
    handleSave(movieData)
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Film Bilgilerini Girin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formMovieTitle">
            <Form.Label>Film Adı</Form.Label>
            <Form.Control type="text" name="name" value={movieData.name} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formMovieAuthor">
            <Form.Label>Yönetmen</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={movieData.author}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formMovieCategory">
            <Form.Label>Kategori</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={movieData.category}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formMovieDate">
            <Form.Label>Yayınlanma Tarihi</Form.Label>
            <Form.Control
              type="text"
              name="releaseDate"
              value={movieData.releaseDate}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formMovieUrl">
            <Form.Label>Url</Form.Label>
            <Form.Control type="url" name="url" value={movieData.url} onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Kapat
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Kaydet
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MovieModal
