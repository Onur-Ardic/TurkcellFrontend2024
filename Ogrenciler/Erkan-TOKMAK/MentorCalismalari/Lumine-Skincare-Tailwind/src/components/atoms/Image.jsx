import React from 'react'

const Image = ({image,style}) => {
  return (
    <img src={image} className={`${style}`}></img>
  )
}

export default Image