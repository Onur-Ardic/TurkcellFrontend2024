import Card from './Card';

function CardList({ data }) {
  return (
    <div className="cardList">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

export default CardList;
