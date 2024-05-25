import propTypes from 'prop-types'
import { useState } from 'react';



const Deneme = ({isim ="İsim girilmedi",yas="Yas girilmedi"}) => {
  const [count,setCount] = useState(0);
  return(
  <>
    <div>{isim}</div>
    <div>{yas}</div>
    <div>{ count }</div>
    <button onClick={ ()=> setCount(count+1) }>Arttır</button>
  </>
  );
};



Deneme.propTypes = {
  isim: propTypes.string,
  yas: propTypes.number
};


export default Deneme;