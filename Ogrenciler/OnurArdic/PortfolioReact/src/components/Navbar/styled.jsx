import styled from 'styled-components'

export const Nav = styled.nav`
  padding: 1rem 1rem;
  margin: 0;
  background-color: #000;

  @media screen and (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  background-color: #fff;
  font-size: 30px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const Item = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  list-style-type: none;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    background-color: #000;
    transition: all 0.3s ease;
  }
`

export const NavbarItem = styled.li`
  font-size: 15px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 15px;
    text-align: center;
    width: 100%;
  }
`
