import React from 'react'
import Label from '../../atoms/label/Label'
import Input from '../../atoms/input/Input'

const FormGroup = ({label, name, value, onChange, type}) => {
  return (
    <>
    <Label htmlFor={name} text={label} />
    <Input type={type} name={name} value={value} onChange={onChange}/>
    </>
  )
}

export default FormGroup
