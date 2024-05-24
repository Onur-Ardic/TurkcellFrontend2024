import PropTypes from "prop-types";
import { useState } from "react";

const Deneme = ({
  isim = "İsim Bilgisi Girilmedi",
  yas = "Yaş Bilgisi Girilmedi",
}) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{isim}</div>
      <div>{yas}</div>
      <div>{count}</div>
      <button onClick={()=> setCount(count + 1)}>Artır</button>
    </>
  );
};

Deneme.propTypes = {
  isim: PropTypes.string.isRequired,
  yas: PropTypes.number,
};

// Deneme.defaultProps = {
//   isim: "İsim Bilgisi Girilmedi",
//   yas: "Yaş Bilgisi Girilmedi",
// }

export default Deneme;
