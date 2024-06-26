import { getBlog } from "@/service/api";
import BlogCard from "@/components/BlogCard";

const Blog = async ({ params }) => {
  const data = await getBlog(params.id);
  return (
    <div className="col-lg-4 mx-auto mt-1">
      <BlogCard blog={data} />
    </div>
  );
};

export default Blog;
