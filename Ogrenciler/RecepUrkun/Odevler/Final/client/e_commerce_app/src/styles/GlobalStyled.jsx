"use client";
const { createGlobalStyle, default: styled } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  transition: all 0.5s ease;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  /* overflow-wrap: break-word; */
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
`;
export const Divider = styled.hr`
  border: 1px solid;
  width: 100%;
  margin: 64px 0;
`;

export const FooterUp = styled.div`
  background-color: #f0f0f0;
  margin-top: 170px;
  @media screen and (max-width: 425px) {
    margin-top: 140px;
  }
`;

export const DetailsDivider = styled.hr`
  border: 1px solid;
  width: 100%;
  color: rgba(0, 0, 0, 0.3);
  margin: 18px 0;
`;
