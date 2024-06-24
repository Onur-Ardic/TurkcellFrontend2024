import Image from 'next/image'
import styled from "./styled.module.css"
import { notFound } from 'next/navigation'

const getPosts = async (id) => {
    try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`)
        return response.json()
    }
    catch (error) {
        throw new Error(error)
    }
}

const Page = async ({ params }) => {
    const { id, title, body, tags, views, userId, reactions } = await getPosts(params.id)

    if (!title) {
        return notFound()
    }

    return (
        <div className={styled.blogContainer}>
            <div className={styled.cardImage}>
                <Image src={`https://picsum.photos/960/400?random=${id}`}
                    alt={title}
                    fill
                />
            </div>
            <h1 className={styled.title}>{title}</h1>
            <p>{body}</p>
            <div style={{ width: '100%', marginTop: '10px' }}>
                <div className={styled.tags} style={{ display: 'flex' }}>
                    {tags.map((tag, index) => <button key={index}>{tag}</button>)}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <h3 style={{ opacity: '.5' }}><small>Views: {views} | UserId: {userId}</small></h3>
                    <h3><small>👍 {reactions.likes}  👎{reactions.dislikes}</small></h3>
                </div>
            </div>
        </div>
    )
}

export default Page