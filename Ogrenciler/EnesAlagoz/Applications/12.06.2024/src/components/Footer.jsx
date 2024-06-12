import ThemeSwitcher from "./ThemeSwitcher";
import { MainContext, useContext } from "./context";

const Footer = () => {
  const { setLogoText } = useContext(MainContext);
  const switchLogoText = () => {
    //ne yapacaz
    setLogoText("enes.net");
  };
  return (
    <>
      <div>Footer Component</div> <br />
      <ThemeSwitcher />
      <button onClick={switchLogoText}>Switch Logo Text</button>
    </>
  );
};

export default Footer;
