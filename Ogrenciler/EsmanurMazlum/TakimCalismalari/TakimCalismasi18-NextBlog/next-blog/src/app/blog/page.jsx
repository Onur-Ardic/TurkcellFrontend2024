import Link from "next/link"
'use client'

const page = ({children}) => {

    const fetchPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = response.json();
    }


  return (
    <div>
        {children}
        <button onClick={() => fetchPosts()}>verileri getir</button>
        <Link href="blog/5">Blog detay</Link>
    </div>
  )
}

export default page