import React from "react";
import errorMsg from "../assets/404.svg";
import { Button } from "./Styled";

const Error = ({ message, scrollToTop }) => {
  return (
    <div className="text-center mt-2 p-5">
      <p className="fs-2 text-danger m-0">{message}</p>
      <img src={errorMsg} alt="Error" className="img-fluid" />
      <Button $primary={false} onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up mx-2"></i> Yukarıya çık
      </Button>
    </div>
  );
};

export default Error;
