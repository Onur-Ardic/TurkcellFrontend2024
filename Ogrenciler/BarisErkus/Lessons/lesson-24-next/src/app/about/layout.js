import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About Page",
  description: "About page description",
};

export default function AboutLayout({ children }) {
  return (
    <div>
      <h2>Bu about layout</h2>
      {children}
    </div>
  );
}
