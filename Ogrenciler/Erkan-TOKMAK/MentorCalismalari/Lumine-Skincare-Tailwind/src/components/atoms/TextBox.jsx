import React from 'react'

const TextBox = ({style,text}) => {
  return (
    <span className={`${style}`}>{text}</span>
  )
}

export default TextBox