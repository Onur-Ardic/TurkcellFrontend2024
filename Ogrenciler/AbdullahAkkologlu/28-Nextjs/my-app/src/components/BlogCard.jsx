import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <Link href={`blog/${blog.id}`}>
      <Image
        src={`https://picsum.photos/id/${blog.id}/200/300`}
        width={200}
        height={300}
      />
      <h3> {blog.title}</h3>
      <p>{blog.body}</p>
    </Link>
  );
};

export default BlogCard;
