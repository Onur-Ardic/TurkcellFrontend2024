import React from "react";
import { useCounter } from "../context/CounterContext";

const ShowInfo = () => {
  const { value } = useCounter();

  return (
    <div className="p-20">
      <h2 className="header">Guncel Deger: {value}</h2>
    </div>
  );
};

export default ShowInfo;
