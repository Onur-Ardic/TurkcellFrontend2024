import Providers from "@/redux/slices/Provider";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import "../../styles/css/main.css";
import Head from "next/head";
import Script from "next/script";
import { FilterProvider } from "@/app/context/FilterContext";

export const metadata = {
  title: "SHOP.CO",
  description: "e - commerce",
};

const loadMessages = async (locale) => {
  try {
    const messages = await import(`../../../messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}`, error);
    return null;
  }
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await loadMessages(locale);

  if (!messages) {
    return (
      <html>
        <body>
          <h1>Language not supported</h1>
        </body>
      </html>
    );
  }

  return (
    <html lang={locale}>
      <body>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <Providers>
          <FilterProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </FilterProvider>
        </Providers>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
