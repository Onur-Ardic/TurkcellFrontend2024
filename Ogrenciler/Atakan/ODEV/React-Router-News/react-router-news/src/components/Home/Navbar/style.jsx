import style from "styled-components";

export const NavbarStyle = style.nav`
background-color : #979A9A;
font-family: "Sedan", serif;
`;

export const NavbarWrapper = style.div`
display : flex;
justify-content : space-between;
align-items : center;


.logo{
 color : black;
 h3{
 font-size : 30px;
}
}
`;

export const NavbarItems = style.ul`
display : flex;
gap : 2rem;

li{
list-style-type : none;
}

a{
text-decoration : none;
color : black;
font-size : 20px;
}
`;

export const SecondNavbarStyle = style.div`
font-family: "Sedan", serif;
background-color : #B3B6B7;
display : flex;
align-items : center;
padding-bottom: 1rem;

.second-navbar-items{
display : flex;
gap : 2rem;

li{
list-style-type : none;
}

a{
text-decoration : none;
color : #000;
font-size : 20px;

}

}
`;
