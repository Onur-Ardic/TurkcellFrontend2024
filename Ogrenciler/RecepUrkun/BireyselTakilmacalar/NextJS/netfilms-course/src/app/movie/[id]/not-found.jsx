import Link from "next/link";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const Movie404 = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
        gap: 50,
      }}
    >
      <h1>We couldn&apos;t find the movie you looking for!</h1>
      <Link
        href="/"
        style={{ textDecoration: "none", fontSize: "20", marginTop: 8 }}
      >
        <h3 style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <FaLocationArrow /> Go Home
        </h3>
      </Link>
    </div>
  );
};

export default Movie404;
