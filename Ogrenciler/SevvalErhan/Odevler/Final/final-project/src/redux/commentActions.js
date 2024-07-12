import { auth } from "@/firebaseConfig";
import products from "@/db/product.json";

export const saveCartItems = (items) => async (dispatch) => {
  const user = auth.currentUser;
  if (user) {
    const userCartIndex = products.boxes.findIndex(
      (cart) => cart.user_id === user.uid
    );
    const itemsToSave = items.map((item) => ({
      product_id: item.product_id,
      comment: item.comment,
      rating: item.rating,
    }));

    if (userCartIndex > -1) {
      products.comments[userCartIndex].items = itemsToSave;
    } else {
      products.comments.push({ user_id: user.uid, items: itemsToSave });
    }
  }
};
