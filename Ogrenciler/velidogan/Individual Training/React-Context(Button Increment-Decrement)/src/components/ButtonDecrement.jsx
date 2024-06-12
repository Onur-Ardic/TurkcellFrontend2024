import React, { useContext } from 'react'
import { CountContext } from '../context/CountProvider'

const ButtonDecrement = () => {
    const {decrement} = useContext(CountContext);
  return (
    <div>
        <button onClick={()=>{decrement()}}>Azalt</button>
    </div>
  )
}

export default ButtonDecrement