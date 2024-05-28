import React, { useState, useEffect } from 'react'
import { InputGroups } from '../../molecules/inputGroups/InputGroups'
import { Button } from '../../atoms/buttons/Button'
import { getOptions } from '../../../service/Api';

export const ToDoForm = () => {
    const [options, setOptions] = useState([]);
    const [toDo, setToDo] = useState({title:"", date:"", categories:"", endDate:"", description:""});
    const handleChange = (e) => {
        const {name, value} = e.target
        setToDo({...toDo, [name] :value})
    };
    const fetchOptions = async () => {
        const allOptions = await getOptions()
        setOptions(allOptions)
    };
    useEffect(()=> {
        fetchOptions()
       }, []);
  return (
    <>
    <form>
    <InputGroups text="title" name="title" value={toDo.title} onChange={handleChange}/>
    <InputGroups text="description" name="description" value={toDo.description} onChange={handleChange}/>
    <InputGroups type="select" options={options} text="categories" name="categories" value={toDo.categories} onChange={handleChange}/>
    <InputGroups text="endDate" name="endDate" value={toDo.endDate} onChange={handleChange}/>
    <Button text="ekle" type="submit"/>
    </form>
    </>
  )
}
