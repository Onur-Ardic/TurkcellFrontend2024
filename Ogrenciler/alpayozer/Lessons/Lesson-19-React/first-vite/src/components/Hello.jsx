import React from 'react'
import PropTypes from "prop-types"
import { useState } from 'react'

 const Hello = ({title="React",age=20}) => {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>Hello {title}</div>
    <div>Age {age}</div>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>Arttır</button>
    </>
  )
}

Hello.propTypes = {
  title: PropTypes.string.isRequired,
  age:PropTypes.number
}


export default Hello;