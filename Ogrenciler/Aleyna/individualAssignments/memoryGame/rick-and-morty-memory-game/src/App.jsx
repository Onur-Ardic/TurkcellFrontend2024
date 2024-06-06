import React from "react";
import GameBoard from "./components/GameBoard";
import { TitleImage } from "./styled/StyleComponent";

const App = () => {
  return (
    <>
      <TitleImage src="title.png" />
      <GameBoard />
    </>
  );
};

export default App;
