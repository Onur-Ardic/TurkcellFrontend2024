import React from 'react'
import { Options } from '../options/Options'

export const Selects = ({onChange, options}) => {
  return (
    <select onChange={onChange}>
        {options.map((option, index)=>{
           return (<Options option={option} index={index}/>)
        }
    )}
    </select>
  )
};
