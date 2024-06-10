import React from "react";
import {
  Navbar,
  NavText,
  NavbarItem,
  Container,
  Currency,
} from "../style/style.module";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Search from "./Search";

const Header = ({ search, handleSearch, getDataBySearch, currency }) => {
  return (
    <>
      <Navbar>
        <Container>
          <NavbarItem>
            <NavLink to="/">
              <NavText>Home</NavText>
            </NavLink>
            <NavLink to="/news/general">
              <NavText>General</NavText>
            </NavLink>
            <NavLink to="/news/sports">
              <NavText>Sports</NavText>
            </NavLink>
            <NavLink to="/news/business">
              <NavText>Business</NavText>
            </NavLink>
            <NavLink to="/news/entertainment">
              <NavText>Entertainment</NavText>
            </NavLink>
            <NavLink to="/news/health">
              <NavText>Health</NavText>
            </NavLink>
            <NavLink to="/news/science">
              <NavText>Science</NavText>
            </NavLink>
            <NavLink to="/news/technology">
              <NavText>Technology</NavText>
            </NavLink>
            <Search
              search={search}
              handleSearch={handleSearch}
              getDataBySearch={getDataBySearch}
            />
          </NavbarItem>
        </Container>
      </Navbar>
      <Currency>
        <marquee>
          1 USD : {currency.data?.TRY} TL || 1 USD: {currency.data?.AUD} AUD ||
          1 USD: {currency.data?.JPY} JPY || 1 USD: {currency.data?.EUR} EUR
        </marquee>
      </Currency>
    </>
  );
};

export default Header;
