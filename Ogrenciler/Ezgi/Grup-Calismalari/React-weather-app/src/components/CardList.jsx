import React from 'react'
import Card from './Card'

const CardList = ({ data }) => {

  return (
    <div className='row gap-5 mt-5 pt-5 justify-content-center'>
      {
        data.result?.map((day, index) => (
          <Card
            key={index}
            day={day}/>
        ))
      }
    </div>
  )
}

export default CardList
