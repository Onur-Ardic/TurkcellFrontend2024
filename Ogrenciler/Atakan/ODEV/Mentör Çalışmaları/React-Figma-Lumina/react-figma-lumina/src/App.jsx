import "./App.css";
import DiscoverCard from "./components/DiscoverCard";
import Button from "./components/Button";

function App() {
  return (
    <>
      <section className="discoverSection ml-10 ">
        <div className="container flex flex-col items-start">
          <h1 className="text-2xl font-semibold py-6">DISCOVER OUR SERVICES</h1>
          <div className="cardWrapper flex gap-7 justify-center flex-wrap">
            <DiscoverCard
              topHeading="Lumina's favourite"
              centerHeading="BOTOX"
              bgImage="https://www.shutterstock.com/image-photo/plastic-surgery-young-african-woman-600nw-1753026176.jpg"
            />
            <DiscoverCard
              topHeading="Lumina's favourite"
              centerHeading="LIP FILLERS"
              bgImage="https://st2.depositphotos.com/24547394/44189/i/450/depositphotos_441895788-stock-photo-cosmetological-sheet-mask-face-young.jpg"
            />
            <DiscoverCard
              topHeading="Exclusive"
              centerHeading="LASER HAIR REMOVAL"
              bgImage="https://karsiyakagoz.com/wp-content/uploads/2021/12/lazer-epilasyon.jpg"
            />
          </div>
        </div>
        <div className="btnWrapper flex justify-end gap-1 py-3 pr-14">
          <Button text={<i class="bi bi-arrow-left-short"></i>}></Button>
          <Button text={<i class="bi bi-arrow-right-short"></i>}></Button>
        </div>
      </section>
    </>
  );
}

export default App;
