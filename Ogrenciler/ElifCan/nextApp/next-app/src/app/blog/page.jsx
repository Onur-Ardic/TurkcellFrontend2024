import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

async function BlogPage() {
  const posts = await getPosts();
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`blog/${post.id}`}>
              <img src={`https://picsum.photos/id/${post.id}/300`} alt="" />
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BlogPage;
