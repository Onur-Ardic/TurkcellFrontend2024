import {
  setCartItems,
  removeItemFromCart as removeItem,
} from "@/redux/slices/cartSlice";
import { auth } from "@/firebaseConfig";
import products from "@/db/product.json";

export const fetchCartItems = () => async (dispatch) => {
  const user = auth.currentUser;
  if (user) {
    const userCart = products.boxes.find((cart) => cart.user_id === user.uid);
    if (userCart) {
      const itemsWithDetails = userCart.items.map((item) => {
        const product = products.products.find(
          (product) => product.id === parseInt(item.product_id)
        );
        return {
          ...item,
          ...product,
        };
      });
      dispatch(setCartItems(itemsWithDetails));
    } else {
      dispatch(setCartItems([]));
    }
  }
};

export const saveCartItems = (items) => async (dispatch) => {
  const user = auth.currentUser;
  if (user) {
    const userCartIndex = products.boxes.findIndex(
      (cart) => cart.user_id === user.uid
    );
    const itemsToSave = items.map((item) => ({
      product_id: item.product_id,
      quantity: item.quantity,
    }));

    if (userCartIndex > -1) {
      products.boxes[userCartIndex].items = itemsToSave;
    } else {
      products.boxes.push({ user_id: user.uid, items: itemsToSave });
    }
  }
};

export const removeItemFromCart = (productId) => async (dispatch) => {
  const user = auth.currentUser;
  if (user) {
    dispatch(removeItem({ id: productId }));

    const userCartIndex = products.boxes.findIndex(
      (cart) => cart.user_id === user.uid
    );
    if (userCartIndex > -1) {
      products.boxes[userCartIndex].items = products.boxes[
        userCartIndex
      ].items.filter((item) => item.product_id !== productId);
    }
  }
};
