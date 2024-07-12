import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import StyledComponentsRegistry from "@/lib/styledregistry";
import GlobalStyles from "@/common/GlobalStyles";
import ReduxProvider from "@/common/ReduxProvider";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";

const Providers = async ({ children, locale }) => {
  const messages = await getMessages({ locale });
  return (
    <ReduxProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider enableSystem="false" defaultTheme="light">
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
            <ToastContainer />
          </StyledComponentsRegistry>
        </ThemeProvider>
      </NextIntlClientProvider>
    </ReduxProvider>
  );
};

export default Providers;
