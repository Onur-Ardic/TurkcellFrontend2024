import React from 'react'
import Link from 'next/link'


const Card = ({ post }) => {
  return (
    <div className='card'>
          <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/blog/${post.id}`}>
                Detayları Gör
            </Link>
    </div>
  )
}

export default Card