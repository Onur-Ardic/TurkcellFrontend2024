import PropTypes from "prop-types";
import { useState } from "react";
const Deneme = ({
  isim = "İsim bilgisi girilmedi",
  yas = "Yaş bilgisi girilmedi",
}) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Deneme Vite Denemee <br />
      {isim} <br />
      {yas} <br />
      {count}
      <button onClick={() => setCount(count + 1)}>Arttir</button>
      <hr />
    </div>
  );
};

Deneme.propTypes = {
  isim: PropTypes.string.isRequired,
  yas: PropTypes.string,
};

export default Deneme;
