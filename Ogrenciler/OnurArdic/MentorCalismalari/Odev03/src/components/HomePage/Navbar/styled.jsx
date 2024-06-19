import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  height: 100%;
  gap: 10px;
`

export const NavbarTop = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 112px;
  padding: 9px;
  background-color: #121212;
  border-radius: 10px;
`

export const Ul = styled.ul`
  list-style: none;
  line-height: 30px;
`

export const Li = styled.li`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
`

export const Link = styled.a`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  text-decoration: none;
  display: flex;
  gap: 1.3rem;
  color: #fff;
`

export const Icon = styled.i`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  color: ${(props) => (props.color ? props.color : 'white')};
`

export const NavbarBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 20px 20px 39px;
  background-color: #121212;
  margin-top: 8px;
  border-radius: 10px;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MusicListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: start;
  overflow-y: scroll;
  height: 550px;
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
  margin-top: 48px;
`

export const MusicItemLeft = styled.div``
export const MusicItemRight = styled.div`
  display: flex;
  flex-direction: column;
`

export const CustomImage = styled.img`
  width: ${(props) => (props.width ? props.width : '150px')};
  height: ${(props) => (props.height ? props.height : '160px')};
  border-radius: ${(props) => (props.radius ? props.radius : '10px')};
`
