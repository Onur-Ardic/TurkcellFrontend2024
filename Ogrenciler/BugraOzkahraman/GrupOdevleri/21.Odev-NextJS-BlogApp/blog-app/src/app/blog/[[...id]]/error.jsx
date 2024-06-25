"use client";
import styled from "./styled.module.css";

const Error = () => {
  return (
    <div>
      <hr style={{ marginTop: "20px", marginBottom: 10 }} />
      <div className={styled.notFoundContainer}>
        <h1 className={styled.notFound}>Error !</h1>
      </div>
    </div>
  );
};

export default Error;
