import Navbar from "./Navbar/Navbar";
import Slider from "./slider/Slider";

const Home = ({ setOnCountry, setOnCategory, onData }) => {
  return (
    <>
      <Navbar setOnCountry={setOnCountry} setOnCategory={setOnCategory} />
      <Slider onData={onData} />
    </>
  );
};

export default Home;
