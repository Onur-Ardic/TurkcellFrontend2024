import styled from 'styled-components'

export const MainWrapper = styled.main`
  background-color: #121212;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 0.5rem;
    margin: 0.5rem;
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const SidebarWrapper = styled.div`
  background-color: #121212;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

export const Flexible = styled.div`
  display: ${(props) => (props.display ? props.display : 'block')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'normal')};
  gap: ${(props) => (props.gap ? props.gap : '1rem')};
`

export const UserAlbumsWrap = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const Albums = styled.div`
  width: 280px;
  display: ${(props) => (props.display ? props.display : 'block')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'normal')};
  gap: ${(props) => (props.gap ? props.gap : '1rem')};
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

export const AlbumsContent = styled.div`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '15px')};
  color: ${(props) => (props.color ? props.color : '#838383')};
  padding: ${(props) => (props.padding ? props.padding : '1rem')};

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 0.5rem;
  }
`

export const ForYouWrap = styled.div`
  padding: 1rem;
  background-color: #1d1d1d;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`

export const ArtisWrap = styled.div`
  padding: 1rem;
  background-color: #1d1d1d;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`
