
import { Inter } from "next/font/google";
// import "./globals.css";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <h1>Blog</h1>
          <Link href="/">Anasayfa</Link> <br />
          <Link href="/about">About</Link>
          <br />
          <Link href="/blog/65">Blog</Link>
          {children}
        </body>
      </html>
  );
}
