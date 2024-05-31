import Card from "./Card";
const CardList = ({ weatherData }) => {
  return (
    <>
      <div className="cardToday">
        {weatherData.slice(0, 1).map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>

      <div className="cardList">
        <div className="cards">
          {" "}
          {weatherData.slice(1, 7).map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
