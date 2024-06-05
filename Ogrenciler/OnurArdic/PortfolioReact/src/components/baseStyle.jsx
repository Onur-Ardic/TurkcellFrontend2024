import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
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
    border: 1px solid #474f7a;

    i {
      color: #121212;
    }
  }
`
