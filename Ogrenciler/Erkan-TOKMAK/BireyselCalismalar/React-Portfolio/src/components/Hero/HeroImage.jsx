import React from 'react'
import avatar from '../../assets/avatar3.png'
const HeroImage = () => {
  return (
    <>
        <figure className='d-flex justify-content-center'>
            <img src={avatar} alt='Avatar İmage' width={250}/>
        </figure>
    </>
  )
}

export default HeroImage