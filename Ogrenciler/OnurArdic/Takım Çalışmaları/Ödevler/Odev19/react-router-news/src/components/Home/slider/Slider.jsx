import Carousel from 'react-bootstrap/Carousel'

function Slider() {
  return (
    <Carousel className="container mt-5" data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100  rounded-2"
          style={{ height: '500px' }}
          src="https://picsum.photos/800/1000.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="bg-dark text-white p-1">Third slide label</h5>
          <p className="bg-dark text-white p-1">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-2"
          style={{ height: '500px' }}
          src="https://picsum.photos/800/1000.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="bg-dark text-white p-1">Third slide label</h5>
          <p className="bg-dark text-white p-1">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-2"
          src="https://picsum.photos/800/1000.jpg"
          alt="Third slide"
          style={{ height: '500px' }}
        />
        <Carousel.Caption>
          <h5 className="bg-dark text-white p-1">Third slide label</h5>
          <p className="bg-dark text-white p-1">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
