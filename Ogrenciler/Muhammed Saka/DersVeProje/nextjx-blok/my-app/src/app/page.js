import Image from "next/image";
import styles from "./page.module.css";
const gethost = async () => {
const cevap = await fetch("https://jsonplaceholder.typicode.com/posts")
return cevap.json()
}
export default async function Home() {
  const data = await gethost()
  return (
    <main className={styles.main}>
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <div className={styles.card}>
          <Image src= {`https://picsum.photos/200/300?random=${item.id}`} alt="cardimage" width={200} height={200}/>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        )
      })}
      
      
      
      
      </div>
    </main>
  );
}
