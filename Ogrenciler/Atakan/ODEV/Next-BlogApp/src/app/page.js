import Request from "./request";
import PostCard from "../components/PostCard";

export default async function Home() {
  const posts = await Request.get(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
  );

  return (
    <main className=" bg-dark">
      <div className="container">
        <h1 className="text-center py-3 text-light">POSTS</h1>
        <div className="container mx-auto my-3 row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2">
          {posts &&
            posts.map((post, index) => (
              <PostCard className="col" key={index} post={post}></PostCard>
            ))}
        </div>
      </div>
    </main>
  );
}
