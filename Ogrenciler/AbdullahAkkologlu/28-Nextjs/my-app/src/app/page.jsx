import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/service/api";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

const Blogs = async () => {
  const data = await getBlogs();
  return (
    <div className="container">
      <div className="row">
        <Suspense fallback={<Loading/>}>
        {data.slice(9, 21).map((blog) => (
          <Link href={`blog/${blog.id}`} key={blog.id} className="col-lg-4">
            <BlogCard blog={blog} />
          </Link>
        ))}
        </Suspense>
      </div>
    </div>
  );
};
export default Blogs;
