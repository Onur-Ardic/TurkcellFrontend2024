import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import StyledComponentsRegistry from "./blog/[id]/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <Navbar/>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
  );
}
