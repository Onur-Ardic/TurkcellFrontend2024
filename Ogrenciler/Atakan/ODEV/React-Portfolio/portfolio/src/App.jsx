import "./App.css";
import Navbar from "./components/molecules/navbar/Navbar";
import HomeText from "./components/molecules/homeText/HomeText";
import HomeImage from "./components/molecules/homeImage/HomeImage";

function App() {
  return (
    <>
      {" "}
      <header>
        <div class="container">
          <Navbar />
        </div>
      </header>
      <section class="home">
        <div class="container">
          <div class="home-holder flex jc-sbetween">
            <HomeText />
            <HomeImage />
          </div>
        </div>
      </section>
      <div class="bg-shape-left"></div>
      <div class="bg-shape-right"></div>
    </>
  );
}

export default App;
