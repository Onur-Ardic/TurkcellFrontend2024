import React from 'react'

const Button = ({onClick, text, type}) => {
  return (
    <>
    <button type={type} onClick={onClick}>{text}</button>
    </>
  )
}

export default Button
