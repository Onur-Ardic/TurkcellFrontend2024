import Image from "next/image";

const PostDetails = async ({ params }) => {
  const { postId } = params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await res.json();

  return (
    <div className="container">
      <div className="imageContainer">
        <Image src="/post.png" alt="Post Image" fill />
      </div>
      <div className="contentContainer">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
