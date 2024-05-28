import React from 'react'
import { Labels } from '../../atoms/labels/Labels'
import { Input } from '../../atoms/inputs/Input'
import { Selects } from '../../atoms/selects/Selects'

export const InputGroups = ({options, text, onChange, value, type, name}) => {
  return (
    <>
    <Labels htmlFor={name} text={text}/>
    {type == "select"? <Selects options={options} onChange={onChange} />: <Input type={type} name={name} onChange={onChange} value={value}/> }
    </>
  )
}
