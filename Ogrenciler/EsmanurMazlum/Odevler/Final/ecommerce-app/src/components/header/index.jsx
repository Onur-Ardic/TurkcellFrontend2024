import React from 'react'
import Navbar from './navbar'

function Header() {
  return (
    <>
      <div className='bg-black'>
        <div className='d-flex container anouncement-bar justify-content-between align-items-center'>
          <p className='w-100 text-white m-0 text-center fw-normal fs-sm'>Sign up and get 20% off to your first order. <u className='fw-medium'>Sign Up Now</u></p>
          <span className='d-flex justify-content-end'>
            <img src="icons/close.svg" alt='Close' />
          </span>
        </div>
      </div>
      <div className='container'>
          <Navbar />
      </div>
    </>
  )
}

export default Header