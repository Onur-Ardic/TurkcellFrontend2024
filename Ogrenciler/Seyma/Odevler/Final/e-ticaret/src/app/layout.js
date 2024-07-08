//import { Inter } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "@/context/ThemeContext";
import i18next from '../i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: i18next.t('layoutTitle') ,
  description: i18next.t('layoutDescription') ,
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
      <ThemeProvider>{children}</ThemeProvider>
     </body>
    </html>
  );
}


