import { Button } from "../style/styled";
import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { temayiDegistir } from "../redux/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const ThemeButton = () => {
  const theme = useSelector((themeX) => themeX.theme.value);
  const dispatch = useDispatch(9);

  const changeTheme = () => {
    dispatch(temayiDegistir());
  };

  return (
    <Button
      onClick={() => changeTheme()}
      className="d-flex align-items-center py-2"
    >
      {theme == "dark" ? <IoIosSunny /> : <IoMdMoon />}
    </Button>
  );
};

export default ThemeButton;
