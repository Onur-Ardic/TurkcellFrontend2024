import React from 'react'

const Title = ({style, text}) => {
  return (
    <h1 className={`${style}`}>{text}</h1>
  )
}

export default Title