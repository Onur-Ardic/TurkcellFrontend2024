"use server";
import { revalidatePath } from "next/cache";
import { getUser } from "./user";
import { BASE_URL } from "./baseUrl";

export const updateDbCart = async (userId, cart) => {
  const user = await getUser(userId);
  user.cart = cart;

  const res = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (res.status !== 200) {
    throw new Error("Failed to update cart");
  }

  revalidatePath("/cart");

  const data = await res.json();
  return data;
};
