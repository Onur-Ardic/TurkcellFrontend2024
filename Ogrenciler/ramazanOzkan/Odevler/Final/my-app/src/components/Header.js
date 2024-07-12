"use client";
import styled from "styled-components";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as BootstrapNavLink,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";

const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

const NavBarStyled = styled(Navbar)`
  padding: 10px 20px;
  background-color: #fff;
`;

const Logo = styled(NavbarBrand)`
  font-size: 1.5em;
  font-weight: bold;
  margin-right: 20px;
`;

const NavLinks = styled(Nav)`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(BootstrapNavLink)`
  cursor: pointer;
  color: black !important;
  &:hover {
    color: black !important;
  }
`;

const SearchBar = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  flex-grow: 2;
  margin: 0 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Icon = styled.div`
  font-size: 1.2em;
  cursor: pointer;
  color: black;
`;

const LanguageSelector = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;

const setLocaleCookie = (locale) => {
  Cookies.set("language", locale, { expires: 7 });
};

const handleClick = (event, locale) => {
  event.preventDefault();
  setLocaleCookie(locale);
  window.location.reload(); // Sayfayı yeniden yükle
};

const Header = () => {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <HeaderContainer>
      <NavBarStyled expand="md">
        <Logo href="/">SHOP.CO</Logo>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavLinks navbar>
            <NavItem>
              <NavLink href="#">{t("nav1")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">{t("nav2")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">{t("nav3")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/category">{t("nav4")}</NavLink>
            </NavItem>
          </NavLinks>
          <SearchBar type="text" placeholder={t("placeholder")} />
          <IconContainer>
            <Link href="/cart">
              <Icon>
                <i className="fas fa-shopping-cart"></i>
              </Icon>
            </Link>
            <Link href="/login">
              <Icon>
                <i className="fas fa-user"></i>
              </Icon>
            </Link>
          </IconContainer>
          <LanguageSelector>
            <NavLink href="#" onClick={(e) => handleClick(e, "tr")}>
              TR
            </NavLink>
            <NavLink href="#" onClick={(e) => handleClick(e, "en")}>
              EN
            </NavLink>
          </LanguageSelector>
        </Collapse>
      </NavBarStyled>
    </HeaderContainer>
  );
};

export default Header;
