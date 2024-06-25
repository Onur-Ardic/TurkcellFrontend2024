import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";
import BlogCard from "@/components/BlogCard/BlogCard";
import { getPosts } from "@/api/api";


export default async function Home() {
  const data = await getPosts()

  return (
    <div className={styles.main} >
      {data.slice(0, 10).map((post) => <BlogCard key={post.id} post={post} />)}
      <Footer />
    </div>
  );
}
