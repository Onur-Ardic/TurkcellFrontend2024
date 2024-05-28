import React from 'react'

export const Options = ({option, index}) => {
  return (
    <option value={option} key={index}>{option}</option>
  )
}
