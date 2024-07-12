import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "@smastrom/react-rating/style.css";
import "react-range-slider-input/dist/style.css";
import "react-toastify/dist/ReactToastify.css";

import Discount from "@/components/Header/Discount";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer";

import Providers from "@/common/Providers";

const integralFc = localFont({
  src: [
    {
      path: "../../../public/fonts/Fontspring-DEMO-integralcf-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-integralFc",
});

const satoshi = localFont({
  src: [
    {
      path: "../../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata = {
  title: "SHOP.CO",
  description: "E-commerce website for all your needs!",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${integralFc.variable} ${satoshi.variable}`}>
        <Providers locale={locale}>
          <Discount />
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
