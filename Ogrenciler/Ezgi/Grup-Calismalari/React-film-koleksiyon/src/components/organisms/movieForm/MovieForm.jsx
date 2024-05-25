import React, { useState } from 'react'
import FormGroup from '../../molecules/formGroup/FormGroup'
import Button from '../../atoms/button/Button'
import { addMovie } from '../../../service/Api'

const MovieForm = ({onAdd}) => {

    const [movie, setMovie] = useState({
      title: "",
      director: "",
      category: "",
      year: "",
      image: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setMovie({...movie, [name]: value})
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      onAdd(movie)
      setMovie({
        title: "",
        director: "",
        category: "",
        year: "",
        image: ""
      })
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <FormGroup label = "Film Adı" name = "title" onChange = {handleChange} value={movie.title}/>
        <FormGroup label = "Yönetmen" name = "director" onChange = {handleChange} value={movie.director}/>
        <FormGroup label = "Kategori" name = "category" onChange = {handleChange} value={movie.category}/>
        <FormGroup label = "Çıkış Yılı" name = "year" onChange = {handleChange} value={movie.year}/>
        <FormGroup label = "Afiş URL" name = "image" onChange = {handleChange} value={movie.image}/>
        <Button text = "Ekle" type="submit"/>
    </form>
    </>
  )
}

export default MovieForm
