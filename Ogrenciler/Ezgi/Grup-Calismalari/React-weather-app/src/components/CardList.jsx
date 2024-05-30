import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <div className="row gap-5 mt-5 pt-5 justify-content-center mb-5">
      {data.result?.map((day, index) => (
        <Card
          key={index}
          day={day}
          col={"col-2"}
          bg={""}
          color={"purple"}
          dayBg={"purple-bg"}
        />
      ))}
    </div>
  );
};

export default CardList;
