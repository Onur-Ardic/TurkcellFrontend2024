import Carousel from 'react-bootstrap/Carousel'

function Slider({ onData }) {
  return (
    <Carousel className="container mt-5" data-bs-theme="dark">
      {onData.slice(0, 5).map((item) => (
        <Carousel.Item key={item.title}>
          <img
            className="d-block w-100  rounded-2"
            style={{ height: '500px' }}
            src={item.urlToImage ? item.urlToImage : 'bg.png'}
            alt={item.title}
          />
          <Carousel.Caption>
            <h5 className="bg-dark text-white p-1">{item.title}</h5>
            <p className="bg-dark text-white p-1">{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider
