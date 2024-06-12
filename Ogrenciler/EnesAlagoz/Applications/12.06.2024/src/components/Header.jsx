import { useState } from "react";
import { MainContext, useContext } from "./context";
const Header = () => {
  const { theme, logoText } = useContext(MainContext);
  return (
    <>
      <h3>{logoText}</h3>
      <div>Current theme = {theme}</div>
    </>
  );
};

export default Header;
