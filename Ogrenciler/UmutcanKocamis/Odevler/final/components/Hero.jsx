import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-secondary'>
        <div className='container pt-5'>
            <div className='d-flex flex-column'><h1 className='bold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className='text'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className='btn bg-black text-white rounded-pill py-3 fs-6'>Shop Now</button></div>
            <div className='row text-center mt-3'>
                <div className='col-6'>
                    <div>
                      <h3 className='fw-bold'>200+</h3>
                      <p>International Brands</p>
                    </div>
                </div>
                <div className='col-6'>
                    <div>
                    <h3 className='fw-bold'>2000+</h3>
                    <p>High-Quality Products</p>
                    </div>
                </div>
                <div className='col'>
                    <div>
                    <h3 className='fw-bold'>30000+</h3>
                    <p>Happy Customers</p>
                    </div>
                </div>
            </div>
            <div className='images'>
                <img src="/images/big-star.png" alt="" className='big-star' />
                <img src="/images/little-star.png" alt="" className='little-star' />
            </div>
        </div>
    </div>
  )
}

export default Hero