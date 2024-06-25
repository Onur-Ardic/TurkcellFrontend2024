import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <Link href={`blog/${blog.id}`}>
      <h3> {blog.title}</h3>
      <p>{blog.body}</p>
    </Link>
  );
};

export default BlogCard;
