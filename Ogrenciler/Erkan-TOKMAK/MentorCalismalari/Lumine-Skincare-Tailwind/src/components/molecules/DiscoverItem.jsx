import React from 'react'
import TextBox from '../atoms/TextBox'
import Title from '../atoms/Title'

const DiscoverItem = ({styleText,styleTitle,titleText,image,text}) => {
  return (
    <>
      <div className={`flex flex-col h-80 rounded-lg ${image}`}>
          <TextBox style={styleText} text={text}/>
          <Title style={styleTitle} text={titleText}/>
      </div>
    </>
  )
}

export default DiscoverItem