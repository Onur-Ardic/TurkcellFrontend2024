'use client'

import BlogCard from '@/components/BlogCard'
import { useEffect, useState } from 'react'

const Blogs = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <h1 className="text-center p-3 text-4xl">Bloglar</h1>
      <div className="flex flex-wrap container mx-auto justify-between">
        {data.slice(10, 50).map((data) => (
          <BlogCard data={data} key={data.id} />
        ))}
      </div>
    </>
  )
}

export default Blogs
