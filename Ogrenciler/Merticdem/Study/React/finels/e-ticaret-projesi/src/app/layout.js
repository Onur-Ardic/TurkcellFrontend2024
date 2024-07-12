import "../styles/globals.scss";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
