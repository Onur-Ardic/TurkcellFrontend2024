import React, { useContext } from 'react'
import { CountContext } from '../context/CountProvider'

const ButtonIncrement = () => {
    const {increment} = useContext(CountContext);
  return (
    <div>
        <button onClick={()=>{increment()}}>Arttır</button>
    </div>
  )
}

export default ButtonIncrement