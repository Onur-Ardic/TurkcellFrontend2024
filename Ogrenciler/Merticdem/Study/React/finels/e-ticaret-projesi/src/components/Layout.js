import Navbar from "./Navbar";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
