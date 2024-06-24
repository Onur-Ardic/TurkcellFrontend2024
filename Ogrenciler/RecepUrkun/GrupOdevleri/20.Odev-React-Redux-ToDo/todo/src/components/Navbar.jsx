import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "./Theme";
import ChangeLang from "./ChangeLang";
import { useTranslation } from "react-i18next";

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
  align-items: baseline;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: orange;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <Nav>
      <div>
        <NavLink to="/todos">{t("home")}</NavLink>
      </div>
      <Theme />
      <ChangeLang />
      <div>
        <NavLink to="/login">{t("login")}</NavLink>
        <NavLink to="/">{t("register")}</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
