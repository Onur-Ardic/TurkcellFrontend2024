"use client";
import styled from "styled-components";

export const Header = styled.div`
  h6 {
    font-size: 14px;
  }
`;

export const Nav = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  .input-group {
    width: 100%;
    height: 48px;
  }

  @media (min-width: 992px) {
    padding-left: 100px;
    padding-right: 100px;

    .input-group {
      width: 577px;
    }
  }

  .navbar-brand {
    font-size: 24px;
    font-weight: bold;
  }

  .navbar-toggler {
    border: none;
    outline: none;
  }

  .navbar-collapse {
    @media (max-width: 991px) {
      .navbar-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
    }
  }

  .navbar-nav {
    @media (min-width: 992px) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  .nav-item {
    margin-left: 15px;
    @media (max-width: 991px) {
      margin: 10px 0;
    }
  }

  .d-flex {
    @media (max-width: 991px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }

  .input-group-text {
    background-color: #fff;
    border: none;
  }

  .form-control {
    border: none;
  }
`;
