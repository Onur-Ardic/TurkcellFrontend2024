import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const url = `https://jsonplaceholder.typicode.com/posts?_limit=20`


export const get = async () => {
  const response = await fetch(`${url}`,  {
    method: 'GET',
  
  });
  if (!response.ok) {
    throw new Error("404 not found");
  }
  const result = await response.json();
  return result;
};

const fetchData = async () => {
  const data = await get();
};

//önemli resim için
// const nextConfig = {
//   images: {
//       remotePatterns: [
//           {
//               protocol: 'https',
//               hostname: 'picsum.photos',
//           },
//       ],
//   },
// };
// export default nextConfig;



fetchData();
console.log(result);
// useEffect(() => {
//   fetchData()
// }, [])

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <h1>Layout default</h1>
      <body className={inter.className}>
        <Link href="/">Anasayfa</Link> <br/>
        <Link href="/about">About</Link><br/>
        <Link href="/blog/65465">Blog</Link>
        {children}
        </body>
    </html>
  );
}