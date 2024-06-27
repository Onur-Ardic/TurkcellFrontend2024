
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
      <html lang="en" className="h-100">
        <body className={inter.className}>
          <Navbar/>
          {children}
        </body>
      </html>
  );
}
