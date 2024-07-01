import React from 'react'
import "./Input.css"

const Input = ({type = "text", name, value, onChange}) => {
  return (
    <>
    <input className='input' type = {type} name = {name} value = {value} onChange={onChange} id = {name}/>
    </>
  )
}

export default Input
