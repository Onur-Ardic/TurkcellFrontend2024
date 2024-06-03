import styled from 'styled-components'

export const Nav = styled.nav`
  padding: 1rem 1rem;
  margin: 0;
  background-color: #474f7a;
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

export const Links = styled.a`
  text-decoration: none;
  background-color: transparent;
  color: #fafafa;
  border: 1px solid #fafafa;
  padding: 0.5rem 1rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #fafafa;
    color: #474f7a;
    cursor: pointer;
  }
`
