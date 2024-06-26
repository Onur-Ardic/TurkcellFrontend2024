"use client";
import React from 'react'

const error = ({error}) => {
  return (
    <div className="text-center mx-auto mt-5">
      <h5>{error.message}</h5>
    <img src="/error.png" alt="" />
    </div>
  )
}

export default error