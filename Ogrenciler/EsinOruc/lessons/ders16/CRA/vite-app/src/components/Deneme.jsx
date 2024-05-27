import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const Deneme = ({
  isim = "isim bilgisi girilmedi",
  yas = "yas bilgisi girilmedi",
}) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{isim}</div>
      <div>{yas}</div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </>
  );
};
Deneme.propTypes = {
  isim: PropTypes.string.isRequired,
  yas: PropTypes.string,
};

export default Deneme;
