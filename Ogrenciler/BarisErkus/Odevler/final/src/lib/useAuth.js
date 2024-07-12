"use client";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user } = useSelector((state) => state.user);

  if (user) return user;

  return null;
};
