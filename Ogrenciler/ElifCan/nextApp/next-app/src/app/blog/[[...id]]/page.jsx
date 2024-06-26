async function getPostData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export default async function BlogPostPage({ params }) {
  const { id } = params;
  const post = await getPostData(id);

  return (
    <div>
      <img src={`https://picsum.photos/id/${post.id}/300`} alt="" />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
