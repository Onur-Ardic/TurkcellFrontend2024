import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/service/api";
import classes from "./page.module.css";
import Link from "next/link";

const Blogs = async () => {
  const data = await getBlogs();
  return (
    <div className="container">
      <div className="row">
        {data.slice(9, 21).map((blog) => (
          <Link
            href={`blog/${blog.id}`}
            key={blog.id}
            className={`col-lg-4 ${classes.card}`}
          >
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Blogs;
