import React from 'react'
import Button from '../atoms/Button'

const ButtonGroup = ({style,text}) => {
  return (
    <>
    <div className='flex flex-row gap-3 mt-4 justify-end'>
        <Button style={`rounded-full h-10 w-10 flex items-center justify-center bg-green-300`} text={`<`}/>
        <Button style={`rounded-full h-10 w-10 flex items-center justify-center bg-green-300`} text={`>`} />
    </div>
    </>
  )
}

export default ButtonGroup