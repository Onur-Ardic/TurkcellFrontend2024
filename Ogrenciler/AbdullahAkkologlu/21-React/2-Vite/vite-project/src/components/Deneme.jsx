import PropTypes from "prop-types";
import { useState } from "react";
const Deneme = ({ isim, yas = 23 }) => {
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
  yas: PropTypes.number,
};

export default Deneme;