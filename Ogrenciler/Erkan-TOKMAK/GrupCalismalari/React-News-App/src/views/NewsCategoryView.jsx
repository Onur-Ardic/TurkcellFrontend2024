import React from 'react'
import { useParams } from 'react-router-dom'

const NewsCategoryView = () => {
    const { category } = useParams()
  return (
    <div>NewsCategoryView {category}</div>
  )
}

export default NewsCategoryView