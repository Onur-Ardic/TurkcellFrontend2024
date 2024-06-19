import styled from 'styled-components'

export const MainWrapper = styled.main`
  background-color: #121212;
  border-radius: 10px;
  width: 100%;
`

export const SidebarWrapper = styled.div`
  background-color: #121212;
  padding: 20px;
  border-radius: 10px;
`

export const Flexible = styled.div`
  display: ${(props) => (props ? props.display : 'block')};
  justify-content: ${(props) => (props ? props.justifyContent : 'flex-start')};
  flex-direction: ${(props) => (props ? props.flexDireciton : 'row')};
  align-items: ${(props) => (props ? props.alignItems : 'normal')};
  gap: ${(props) => (props ? props.gap : '1rem')};
`
export const UserAlbumsWrap = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
`

export const Albums = styled.div`
  width: 280px;
  display: ${(props) => (props ? props.display : 'block')};
  justify-content: ${(props) => (props ? props.justifyContent : 'flex-start')};
  flex-direction: ${(props) => (props ? props.flexDireciton : 'row')};
  align-items: ${(props) => (props ? props.alignItems : 'normal')};
  gap: ${(props) => (props ? props.gap : '1rem')};
  background-color: ${(props) => (props ? props.backgroundColor : 'transparent')};
`

export const AlbumsContent = styled.div`
  font-size: ${(props) => (props ? props.fontSize : '15px')};
  color: ${(props) => (props ? props.color : '#838383')};
  padding: ${(props) => (props ? props.padding : '1rem')};
`

export const ForYouWrap = styled.div`
  padding: 1rem;
`
export const ArtisWrap = styled.div`
  padding: 1rem;
`
