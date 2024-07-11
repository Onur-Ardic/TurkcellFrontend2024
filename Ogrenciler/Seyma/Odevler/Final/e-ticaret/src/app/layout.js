//import { Inter } from "next/font/google";
import './globals.sass';
import { ThemeProvider } from "@/context/ThemeContext";
import i18next from '../i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImportBsJS from "../../bs";

//const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar/Navbar";
import TopBar from '@/components/TopBar/TopBar';
import Footer from '@/components/Footer/Footer';


export const metadata = {
  title: i18next.t('layoutTitle') ,
  description: i18next.t('layoutDescription') ,
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
      <ThemeProvider>
        <ImportBsJS />
      <TopBar></TopBar>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </ThemeProvider>
     </body>
    </html>
  ); 
}


