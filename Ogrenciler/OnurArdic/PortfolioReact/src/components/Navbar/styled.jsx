import styled from 'styled-components'

export const Nav = styled.nav`
  padding: 1rem 1rem;
  margin: 0;
  background-color: #000;
`

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`

export const NavbarLogo = styled.div`
  font-size: 20px;
  color: #fafafa;
`

export const Item = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  list-style-type: none;
`

export const NavbarItem = styled.li`
  font-size: 15px;
`
