import React from 'react'

const Errors = ({error}) => {
  return (
    <>
    {error && <div className='alert alert-danger'><h2 className='text-center p-3'>Hata Aldın Tekrar Dene</h2></div>}
    </>
  )
}

export default Errors