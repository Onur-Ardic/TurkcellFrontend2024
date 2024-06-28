import Request from "@/app/request";
import Image from "next/image";
import Link from "next/link";

const Post = async ({ params }) => {
  const post = await Request.get(
    "https://jsonplaceholder.typicode.com/posts/" + params.post
  );

  return (
    <div
      className="container py-4 my-3 bg-dark text-light rounded-4"
      style={{ maxWidth: "400px" }}
    >
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/" className="text-decoration-none">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/" className="text-decoration-none">
              Posts
            </Link>
          </li>
          <li className="breadcrumb-item active text-light" aria-current="page">
            Post {post.id}
          </li>
        </ol>
      </nav>
      <div className="card rounded-3">
        <Image
          className="rounded-top-3 card-img"
          src={`https://picsum.photos/id/${post.id + 100}/200/300`}
          alt="Blog Resmi"
          width={200}
          height={300}
        />
        <div className="card-body">
          <h1>{post.id}</h1>
          <h5 className="card-title text-uppercase fw-semibold">
            {post.title}
          </h5>
          <p className="card-text fst-italic">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
