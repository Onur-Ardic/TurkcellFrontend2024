import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false;
import StoreProvider from "./StoreProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import StyledComponentsRegistry from "@/lib/registry";

import DiscountFirst from "@/components/DiscountFirst";

import ThemeWrapper from "@/themes/ThemeWrapper";
import { GlobalStyles } from "@/styles/ComponentStyle";
import Footer from "@/components/Footer/Footer";
import { GlobalVariables } from "@/styles/global";
import Navbar from "@/components/Header/Navbar";
import '@smastrom/react-rating/style.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: "SHOP.CO",
    description: "New Generation Shopping address",
};


export default async function RootLayout(props) {
    const { children, params: { locale } } = props;
    const messages = await getMessages({ locale });
    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <StoreProvider>
                        <ThemeWrapper >
                            <GlobalStyles />
                            <GlobalVariables />
                            <StyledComponentsRegistry>
                                <DiscountFirst />
                                <Navbar />
                                {children}
                                <Footer />
                                <ToastContainer />
                            </StyledComponentsRegistry>
                        </ThemeWrapper>
                    </StoreProvider>
                </NextIntlClientProvider>
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

