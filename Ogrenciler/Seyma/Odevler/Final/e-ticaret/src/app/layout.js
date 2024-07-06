import { Inter } from "next/font/google";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "e-ticaret",
  description: "e-ticaret final çalışması",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
