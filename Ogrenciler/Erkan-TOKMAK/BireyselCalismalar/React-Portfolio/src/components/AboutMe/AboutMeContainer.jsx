import React from 'react'
import './AboutMeContainer.css'
import me from '../../assets/avatar1.png'
import AboutMeContent from './AboutMeContent'

const AboutMeLeft = () => {
  return (
    <>
    <div className='col-md-12 mt-5'>
      <div className='card bg-light bg-opacity-25 rounded-5 position-relative'>
      <img src={me} className='me' width={350}/>
      <div className='card-body'>
        <h5 className='card-title text-white mt-5'>About Me</h5>
        <AboutMeContent />
      </div>
      </div>
    </div>
    </>
  )
}

export default AboutMeLeft