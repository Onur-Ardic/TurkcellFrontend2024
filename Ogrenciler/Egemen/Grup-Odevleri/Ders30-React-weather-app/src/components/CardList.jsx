import Card from "./Card";

const CardList = ({ data, setActiveDay, capitalize }) => {
  return (
    <div className="row gap-5 mt-5 pt-5 justify-content-center mb-5">
      <h2 className="fw-bold">5 Günlük Hava Durumu</h2>
      {data.result?.slice(0, 5).map((day, index) => (
        <Card
          key={index}
          index={index}
          day={day}
          col={"col-2"}
          bg={"bg-white"}
          color={"purple"}
          dayBg={"purple-bg"}
          setActiveDay={setActiveDay}
          capitalize={capitalize}
        />
      ))}
    </div>
  );
};

export default CardList;
