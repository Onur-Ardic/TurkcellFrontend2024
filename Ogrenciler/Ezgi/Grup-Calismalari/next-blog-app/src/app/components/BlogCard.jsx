import Link from 'next/link';
const BlogCard = ({post}) => {
    return (
        <div>
            <li className='blog-item' key={post.id}>
                <Link href={`/blog/${post.id}`}>
                    <img src={`https://picsum.photos/id/${post.id}/200`} alt={post.title} />
                    {post.title}
                </Link>

            </li>
        </div>
    )
}

export default BlogCard
