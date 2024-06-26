import Link from "next/link";
import styled from "./styled.module.css";

const Navbar = () => {
  return (
    <div className={styled.navbar}>
      <div className="d-flex align-items-baseline">
        <Link href="/">
          <h2 className="text-uppercase fw-bolder" style={{ color: "#4CAF50" }}>
            Inspire
          </h2>
        </Link>
        <h5 className="m-0 ms-2 fw-medium" style={{ color: "#4CAF50" }}>
          Think Create Share
        </h5>
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
