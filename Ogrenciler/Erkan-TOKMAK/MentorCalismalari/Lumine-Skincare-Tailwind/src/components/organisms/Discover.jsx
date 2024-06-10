import React from 'react'
import Heading from '../molecules/Heading'
import DiscoverItem from '../molecules/DiscoverItem'
import ButtonGroup from '../molecules/ButtonGroup'

const Discover = () => {
  return (
    <>
      <div className='container mx-auto'>
        <Heading />
        <div className='grid gap-4 mt-4 grid-cols-3'>
          <DiscoverItem
            styleTitle={'text-white text-center font-semibold text-2xl my-36'}
            titleText={'BOTOX'}
            styleImage={'w-56 h-36 rounded-lg'}
            text={"Lumina's favorite"}
            styleText={'bg-green-50 w-28 py-1 px-2 text-xs text-green-700 mt-2 ms-2'}
            image={'bg-botox bg-cover'} />
          <DiscoverItem
            styleTitle={'text-white text-center  font-semibold text-2xl my-36'}
            titleText={'LIP FILLERS'}
            text={"Lumina's favorite"}
            styleImage={'w-56 h-36 rounded-lg'}
            styleText={'bg-green-50 w-28 py-1 px-2 text-xs text-green-700 mt-2 ms-2'}
            image={'bg-lips bg-cover'} />
          <DiscoverItem
            styleTitle={'text-white text-center font-semibold text-2xl my-36'}
            titleText={'LASER HAIR REMOVAL'}
            styleImage={'w-56 h-36 rounded-lg'}
            text={'Exclusive'}
            styleText={'bg-green-50 w-28 py-1 px-2 text-xs text-green-700 mt-2 ms-2'}
            image={'bg-laser bg-cover'} />
        </div>
        <ButtonGroup />
      </div>
    </>
  )
}

export default Discover