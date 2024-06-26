"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Button = ({ text, link }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(link)}
      className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
    >
      {text}
    </button>
  );
};

export default Button;
