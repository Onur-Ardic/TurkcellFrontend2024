import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #fff;
  border: 1px solid black;
  padding: 20px;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p> 2024 News Website. All rights reserved by RER.</p>
    </StyledFooter>
  );
};

export default Footer;
