import React from 'react'

const Input = ({type = "text", name, value, onChange}) => {
  return (
    <>
    <input type = {type} name = {name} value = {value} onChange={onChange} id = {name}/>
    </>
  )
}

export default Input
