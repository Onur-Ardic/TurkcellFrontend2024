import React from "react";
import errorMsg from "../assets/404.svg";

const Error = ({ message }) => {
  return (
    <div className="text-center mt-2">
      <p className="fs-2 text-danger m-0">{message}</p>
      <img src={errorMsg} alt="Error" className="img-fluid" />
      <button> Yukarıya çık</button>
    </div>
  );
};

export default Error;
