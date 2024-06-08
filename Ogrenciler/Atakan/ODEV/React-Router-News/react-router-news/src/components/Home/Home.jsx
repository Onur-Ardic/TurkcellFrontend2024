import Navbar from './Navbar/Navbar'
import Slider from './slider/Slider'

const Home = ({ setOnCountry, setOnCategory }) => {
  return (
    <>
      <Navbar setOnCountry={setOnCountry} setOnCategory={setOnCategory} />
      <Slider />
    </>
  )
}

export default Home
