import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/service/api";
import classes from "./page.module.css";

const Blogs = async () => {
  const data = await getBlogs();
  return (
    <div className="container">
      <div className="row">
        {data.slice(9, 21).map((blog) => (
          <div key={blog.id} className={`col-lg-4 ${classes.card}`}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blogs;
