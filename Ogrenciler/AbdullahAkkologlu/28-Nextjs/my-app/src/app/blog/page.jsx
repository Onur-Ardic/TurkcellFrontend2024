import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/service/api";

const Blogs = async () => {
  const data = await getBlogs();
  return (
    <div>
      {data.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
export default Blogs;
