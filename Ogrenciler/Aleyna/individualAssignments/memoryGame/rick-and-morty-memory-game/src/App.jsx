import React from "react";
import GameBoard from "./components/GameBoard";
import { TitleImage, AppContainer } from "./styled/StyleComponent";

const App = () => {
  return (
    <AppContainer>
      <TitleImage src="title.png" />
      <GameBoard />
    </AppContainer>
  );
};

export default App;
