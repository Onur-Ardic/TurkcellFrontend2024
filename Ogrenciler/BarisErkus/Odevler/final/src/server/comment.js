"use server";
import { revalidatePath } from "next/cache";
import { getProduct } from "./product";
import { BASE_URL } from "./baseUrl";

export const addComment = async (productId, newComment) => {
  const product = await getProduct(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  const updatedComments = [...product.comments, newComment];

  const newProduct = { ...product, comments: updatedComments };

  const res = await fetch(`${BASE_URL}/products/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  if (res.status !== 200) {
    throw new Error("Failed to add comment");
  }

  revalidatePath("/product/[id]", "page");
  const data = await res.json();
  return data;
};
