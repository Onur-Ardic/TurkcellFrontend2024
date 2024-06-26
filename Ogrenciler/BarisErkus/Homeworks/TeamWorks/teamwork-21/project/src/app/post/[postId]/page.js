import Image from "next/image";

const PostDetails = async ({ params }) => {
  const { postId } = params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await res.json();

  if (!res.ok) throw new Error("Unexpected response from server");

  return (
    <div className="container">
      <div className="imageContainer">
        <Image
          src={`https://picsum.photos/id/${postId}/200`}
          alt="Post Image"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="contentContainer">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
