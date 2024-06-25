import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <Link href={`blog/${blog.id}`}>
      <div className="relative">
        <Image
          src={`https://picsum.photos/id/${blog.id}/200`}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
          alt={blog.title}
        />
      </div>
      <h2> {blog.title}</h2>
      <p>{blog.body}</p>
    </Link>
  );
};

export default BlogCard;
