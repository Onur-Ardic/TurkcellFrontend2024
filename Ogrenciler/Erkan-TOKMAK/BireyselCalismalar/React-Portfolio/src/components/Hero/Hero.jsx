import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

const Hero = () => {
  return (
    <>
    <div className='row py-5'>
    <div className='col-md-6 py-5'>
        <HeroText />
    </div>
    <div className='col-md-6 py-5'>
        <HeroImage />
    </div>
    </div>
    </>
  )
}

export default Hero