import { Inter } from "next/font/google";
import "./globals.css";
import i18next from '../i18n';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: i18next.t('layoutTitle') ,
  description: i18next.t('layoutDescription') ,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


