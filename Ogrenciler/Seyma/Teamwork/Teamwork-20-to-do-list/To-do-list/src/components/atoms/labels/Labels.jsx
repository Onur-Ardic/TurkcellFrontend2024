import React from 'react'

export const Labels = ({text, htmlFor}) => {
  return (
    <label htmlFor={htmlFor}>{text}</label>
  )
}
