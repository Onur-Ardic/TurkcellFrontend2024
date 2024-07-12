"use server";
import { BASE_URL } from "./baseUrl";

export const addUser = async (user) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (res.status !== 201) {
    throw new Error("Failed to add user");
  }

  const data = await res.json();
  return data;
};

export const getUser = async (id) => {
  const res = await fetch(`${BASE_URL}/users?id=${id}`);

  if (res.status !== 200) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();
  return data[0];
};
