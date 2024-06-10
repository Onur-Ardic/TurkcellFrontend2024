import style from 'styled-components'

export const NavbarStyle = style.nav`
  background-color: ${(props) => (props.primary ? props.primary : 'white')};
`

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
`

export const NavbarItems = style.ul`
display : flex;
gap : 10px;

li{
list-style-type : none;
}

a{
text-decoration : none;
color : black;
font-size : 20px;
}
`

export const SecondNavbarStyle = style.div`
background-color : #fafafa
display : flex;
gap : 10px;
align-items : center;

.second-navbar-items{
display : flex;
gap : 10px;

li{
list-style-type : none;
}

a{
text-decoration : none;
color : #000;
font-size : 20px;

}

}
`
