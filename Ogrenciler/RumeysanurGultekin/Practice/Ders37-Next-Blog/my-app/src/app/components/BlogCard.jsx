import React from 'react'

const BlogCard = ({post }) => {
  return (
    <div>
          <img src={`https://picsum.photos/id/${post.id}/500/333`} alt="Blog Image"/>
          <h1>{post.title}</h1>
    </div>
  )
}

export default BlogCard