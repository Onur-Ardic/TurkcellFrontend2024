"use client";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
import { DetailsAddToBasketButton } from "./Styled";

const CartButton = ({ product }) => {
  const userid = 1;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = async () => {
    dispatch(addToCart(product));

    const updatedCartItems = [...cartItems, product];

    try {
      const userResponse = await fetch(`http://localhost:5500/users/${userid}`);
      if (!userResponse.ok) {
        throw new Error(`HTTP error! status: ${userResponse.status}`);
      }

      const users = await userResponse.json();
      if (users.length === 0) {
        throw new Error("User not found");
      }

      const updateResponse = await fetch(
        `http://localhost:5500/users/${userid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sepet: updatedCartItems,
          }),
        }
      );

      if (!updateResponse.ok) {
        throw new Error(`HTTP error! status: ${updateResponse.status}`);
      } else {
        console.log("Cart updated successfully");
      }
    } catch (error) {
      console.error("Failed to update the cart in the database:", error);
    }
  };

  return (
    <DetailsAddToBasketButton onClick={handleAddToCart}>
      Add Cart
    </DetailsAddToBasketButton>
  );
};

export default CartButton;
