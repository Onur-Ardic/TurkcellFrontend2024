import React from 'react'

export const Input = ({name, onChange, value, type}) => {
  return (
    <input id={name} type={type} name={name} onChange={onChange} value={value}/>
  )
}
