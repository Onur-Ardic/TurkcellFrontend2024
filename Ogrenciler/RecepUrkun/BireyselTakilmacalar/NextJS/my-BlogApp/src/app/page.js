import BlogCard from "../../components/BlogCard";
import styled from "./styles.module.css"

const getPosts = async () => {
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  return response.json()
}

export default async function Home() {
  const { posts } = await getPosts()

  return (
    <div className={styled.blogsContainer}>
      {
        posts.map(post => <BlogCard key={post.id} {...post} />)
      }
    </div>
  );
}
