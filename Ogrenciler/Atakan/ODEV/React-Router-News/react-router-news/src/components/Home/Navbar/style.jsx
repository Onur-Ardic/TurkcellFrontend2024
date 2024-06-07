import style from 'styled-components'

export const NavbarStyle = style.nav`
background-color : #fafafa
`

export const NavbarWrapper = style.div`
display : flex;
justify-content : space-between;
align-items : center;
max-width : 1000px;
width : 100%;
margin : 0 auto;

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
