import React from 'react'
import Navbar from './navbar'
import Link from 'next/link'


function Header() {
  return (
    <>
      <div className='bg-black'>
        <div className='d-flex p-0 container anouncement-bar justify-content-between align-items-center'>
          <p className='w-100 text-white m-0 text-center fw-normal fs-sm'>Sign up and get 20% off to your first order. <Link href='/login' className='fw-medium'>Sign Up Now</Link></p>
          <span className='d-flex justify-content-end'>
            <img src="/icons/close.svg" alt='Close' />
          </span>
        </div>
      </div>
      <div className='container p-0'>
          <Navbar />
      </div>
    </>
  )
}

export default Header