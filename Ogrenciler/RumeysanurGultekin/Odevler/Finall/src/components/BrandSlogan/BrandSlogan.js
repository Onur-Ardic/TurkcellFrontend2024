import React from 'react'
import Image from 'next/image'
import Brandimage from '../../../public/brand.jpg'
import "../../app/globals.css"

const BrandSlogan = () => {
  return (
    <div className='row brandslogan'>
        <div className='col-lg-7'>
            <h1 className='slogan Integf'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className='description'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className='brandbtn'>Shop Now</button>
            <div className='d-flex gap-5 mt-4' >
                <div >
                    <h1 className='number '>200+</h1>
                    <p className='numbertext'>International Brands</p>
                </div>
                <div >
                    <h1 className='number'>2,000+</h1>
                    <p className='numbertext'> International Brands</p>
                </div>
                <div >
                    <h1 className='number'>30,000+</h1>
                    <p className='numbertext'>International Brands</p>
                </div>
            </div>
        </div>
        <div className='col-lg-5'>
            <Image src={Brandimage}
            style={{
                width: '100%',
                height: '100%',
                onjectFit: 'cover'}} alt='brand' />
        </div>
    </div>
  )
}

export default BrandSlogan