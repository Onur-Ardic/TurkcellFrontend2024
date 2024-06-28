"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container text-center">
      <div className="flex flex-column pb-5">
        <img
          src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7970.jpg?t=st=1719581883~exp=1719585483~hmac=7532b747c92addf391ae1dc23e0baf34e275a37d645e206107de602c30d51d07&w=740"
          height="375px"
        />
        <h2>Bir şeyler yanlış gitti!</h2>
      </div>
      <button
        className="rounded-2 px-2 py-1 border-0 text-white bg-primary"
        onClick={() => reset()}
      >
        Tekrar Deneyin
      </button>
    </div>
  );
}
