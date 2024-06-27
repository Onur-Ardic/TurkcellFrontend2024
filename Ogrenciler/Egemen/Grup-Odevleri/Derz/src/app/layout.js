
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <Navbar/>
          <Suspense fallback={<Loading />}>
          {children}
          </Suspense>
        </body>
      </html>
  );
}
