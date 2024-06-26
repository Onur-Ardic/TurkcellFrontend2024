import Image from 'next/image'
import React from 'react'
import styled from "./styled.module.css"
import { notFound } from 'next/navigation'
import { getPostDetails } from '@/api/api'

const blogCategories = ["Technology", "Health", "Travel", "Lifestyle", "Education"];

function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * blogCategories.length);
    return blogCategories[randomIndex];
}

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
                <div className={styled.overlay}>
                    <span className={styled.categoryName}>
                        {getRandomCategory()}
                    </span>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-start w-100 mt-3 mb-2'>
                <Image
                    src={`https://picsum.photos/960/400?random=${post.id}`}
                    alt={post.title}
                    width={60}
                    height={60}
                    className='rounded-circle me-2'
                />
                <div>
                    <span className='mx-2'> {Math.floor(Math.random() * 30) + 1} days ago ·</span>
                    <span>{Math.floor(Math.random() * 5) + 1}  min read
                    </span>
                </div>
            </div>
            <h3 className={`${styled.blogTitle} display-4`}>  {post.title}</h3>
            <p className={styled.blogBody}>{post.body}</p>
        </div>
    )
}

export default BlogPage