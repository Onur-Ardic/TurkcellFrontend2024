import styles from "./page.module.css";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  if (!res.ok) throw new Error("Unexpected response from server");

  return (
    <main className={styles.main}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
