import Link from "next/link"

const BlogCard = ({blog}) => {
  return (
    <Link href={`${blog.id}`}>
        <h1>{blog.title}</h1>
        <p>{blog.body}</p>
    </Link>
  )
}

export default BlogCard