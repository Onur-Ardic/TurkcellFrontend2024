import "@/styles/css/main.css";
import { Inter } from "next/font/google";
import BootstrapClient from "@/components/BootstrapClient.js";
import "@smastrom/react-rating/style.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { FooterUp, GlobalStyle } from "@/styles/GlobalStyled";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop CO",
  description: "Best E-Commerce in the World",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} data-bs-theme="light">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/b52804ac57ef6e90d2826a6b0f111133?family=Integral+CF+Bold"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          <GlobalStyle />
          <NextIntlClientProvider messages={messages}>
            <Banner />
            <Navbar />
            <Toaster position="top-right" />
            <main>{children}</main>
            <FooterUp>
              <Footer />
            </FooterUp>
          </NextIntlClientProvider>
          <BootstrapClient />
        </ClientLayout>
      </body>
    </html>
  );
}
