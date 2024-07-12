"use server";
import { revalidatePath } from "next/cache";
import { BASE_URL } from "./baseUrl";

export const getProducts = async (query) => {
  const res = await fetch(`${BASE_URL}/products?${query}`);
  const data = await res.json();
  return data;
};

export const getProduct = async (slug) => {
  const res = await fetch(`${BASE_URL}/products?id=${slug}`);

  if (res.status !== 200) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();
  return data[0];
};

export const getHappyComments = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  const happyComments = [];

  data.forEach((product) => {
    if (product.comments && product.comments.length > 0) {
      product.comments.forEach((comment) => {
        if (comment.rating === 5) {
          happyComments.push(comment);
        }
      });
    }
  });

  return happyComments;
};

export const getNewArrivals = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  const newArrivals =
    data.length > 0
      ? data.filter((product) => product.new_arrival === true)
      : [];

  return newArrivals;
};

export const getTopSelling = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  const topSelling =
    data.length > 0
      ? data.filter((product) => product.top_selling === true)
      : [];

  return topSelling;
};

export const getMightLike = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  const mightLike = data.length > 0 ? data.slice(0, 4) : [];

  return mightLike;
};

export const updateProduct = async (product) => {
  const res = await fetch(`${BASE_URL}/products/${product.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (res.status !== 200) {
    throw new Error("Failed to fetch");
  }

  revalidatePath(`/products/${product.id}`);

  const data = await res.json();
  return data;
};
