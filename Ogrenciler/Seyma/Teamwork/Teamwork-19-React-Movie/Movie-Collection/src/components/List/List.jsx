import React from 'react'
import Card from '../Card/Card'

const List = ({data}) => {
  return (
    <div className='col-8'>
      <h3 className='text-secondary'>Movie List</h3>
      <div className='row'>
      {data.map((movie) => <Card movie={movie} key={movie.id}/>)}
      </div>
    </div>
  )
}

export default List