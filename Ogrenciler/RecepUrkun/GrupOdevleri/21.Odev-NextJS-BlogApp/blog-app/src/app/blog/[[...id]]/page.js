import Image from 'next/image'
import React from 'react'
import styled from "./styled.module.css"
import { notFound } from 'next/navigation'
import { getPostDetails } from '@/api/api'


const BlogPage = async ({ params }) => {
    const post = await getPostDetails(params.id)

    if (!post.title) {
        return notFound();
    }

    return (
        <div className={styled.blogContainer}>
            <div className={styled.cardImage}>
                <Image
                    src={`https://picsum.photos/960/400?random=${post.id}`}
                    alt={post.title}
                    fill
                />
            </div>
            <h3 className={styled.blogTitle}>{post.title}</h3>
            <p className={styled.blogBody}>{post.body}</p>
        </div>
    )
}

export default BlogPage