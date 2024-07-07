import { Inter } from "next/font/google";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from './theme-provider' 
import { useTranslation } from 'next-i18next'

const inter = Inter({ subsets: ["latin"] });
const {t} = useTranslation('common');
export const metadata = {
  title: "e-ticaret",
  description: t.siteDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="locales">
      <body className={inter.className}>
      <ThemeProvider>{children}</ThemeProvider>
       
        </body>
    </html>
  );
}
