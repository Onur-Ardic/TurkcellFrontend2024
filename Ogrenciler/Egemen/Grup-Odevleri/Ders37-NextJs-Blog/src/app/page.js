import styles from "./page.module.css";
import BlogCard from "./components/BlogCard";
import Link from "next/link";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main className={styles.main}>
    <div className={styles.mainContent}>
          {data.map(post => (
           <div className={styles.CardContent} key={post.id}>
           <Link className={styles.CardLink} href={`/blog/${post.id}`}>
             <BlogCard post={post} />
           </Link>
         </div>
          ))}
        </div>
  </main>
}

