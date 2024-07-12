import { Link } from "@/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { IconsWrapper } from "./styles";
import Language from "./Language";
import ThemeChanger from "@/components/Header/Navbar/Icons/ThemeChanger";

const Icons = () => {
  return (
    <IconsWrapper className="d-flex align-items-center gap-3">
      <Link href="#">
        <IoMdSearch size={24} />
      </Link>
      <Link href="/cart">
        <FiShoppingCart size={24} />
      </Link>
      <Link href="/signin">
        <VscAccount size={24} />
      </Link>
      <Language />
      <ThemeChanger />
    </IconsWrapper>
  );
};

export default Icons;
