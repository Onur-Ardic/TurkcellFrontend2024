import React from 'react'

const Errors = ({error}) => {
  return (
    <>
    {error && <h2>Hata Aldın Tekrar Dene</h2>}
    </>
  )
}

export default Errors