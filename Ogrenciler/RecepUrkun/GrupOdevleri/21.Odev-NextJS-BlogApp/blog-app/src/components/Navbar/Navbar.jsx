import Link from "next/link";
import styled from "./styled.module.css";

const Navbar = () => {
  return (
    <div className={styled.footer}>
      <div>
        <Link href="/">
          <h2>BLOG</h2>
        </Link>
      </div>
      <div>
        <h3>
          <Link
            href="https://github.com/waroi/TurkcellFrontend2024"
            target="_blank"
          >
            About Us
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
