import { useSelector } from "react-redux";
import Card from "./Card";

const Left = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="border rounded-4 p-4">
      {cart.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          size={item.size}
          color={item.color}
          count={item.count}
          productId={item.productId}
        />
      ))}
    </div>
  );
};

export default Left;
