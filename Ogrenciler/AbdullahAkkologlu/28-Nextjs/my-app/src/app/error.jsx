"use client";
const error = ({ error }) => {
  return (
    <div className="text-center mx-auto mt-5">
      <h1>{error.message}</h1>
      <img src="/error.png" alt="" />
    </div>
  );
};

export default error;
