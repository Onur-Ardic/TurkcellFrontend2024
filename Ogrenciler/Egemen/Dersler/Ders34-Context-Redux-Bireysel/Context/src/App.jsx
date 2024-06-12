import "./App.css";
// import Button from './components/Button'
import InfoBox from "./components/InfoBox";
import ShowBox from "./components/ShowBox";
import SocialBox from "./components/SocialBox";
import styled from "styled-components";

const BottomSideStyled = styled.div`
  display: flex;
  gap: 500px;
  margin-top: 100px;
`

function App() {
  return (
    <>
      <ShowBox />
      <BottomSideStyled>
        <InfoBox />
        <SocialBox />
      </BottomSideStyled>
    </>
  );
}

export default App;
