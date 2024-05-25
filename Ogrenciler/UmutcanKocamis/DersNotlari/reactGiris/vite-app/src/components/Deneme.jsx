import { useState } from "react";

const Deneme = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{props.isim}</div>
      <div>{props.yas}</div>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <div>{count} </div>
    </>
  );
};

export default Deneme;
