import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  gap: 10px;
  background-color: #121212;
  padding: 10px;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1000;

  /* Sidebar animation and responsiveness */
  @media (max-width: 768px) {
    width: 250px;
    transform: translateX(${(props) => (props.className.includes('open') ? '0' : '-100%')});
  }
`

export const NavbarTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding: 9px;
  background-color: #121212;
  border-radius: 10px;
`

export const Ul = styled.ul`
  list-style: none;
  line-height: 30px;
  padding: 0;
`

export const Li = styled.li`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  margin-bottom: 1rem;
`

export const Link = styled.a`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.3rem;
  color: #fff;

  &:hover {
    color: #1db954;
  }
`

export const Icon = styled.i`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  color: ${(props) => (props.color ? props.color : 'white')};
`

export const NavbarBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 20px 10px;
  background-color: #121212;
  border-radius: 10px;
  flex-grow: 1;
  overflow-y: auto;

  /* Styling scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #2e2e2e;
  }
  ::-webkit-scrollbar-thumb {
    background: #1db954;
    border-radius: 10px;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const MusicListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  overflow-y: auto;
  max-height: 700px;
`

export const MusicList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const MusicCardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const MusicItemLeft = styled.div``
export const MusicItemRight = styled.div`
  display: flex;
  flex-direction: column;
`

export const CustomImage = styled.img`
  width: ${(props) => (props.width ? props.width : '100px')};
  height: ${(props) => (props.height ? props.height : '100px')};
  border-radius: ${(props) => (props.radius ? props.radius : '10px')};
`

export const ToggleButton = styled.button`
  display: none;
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 1100;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`
