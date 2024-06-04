import styled from 'styled-components'

export const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  background-color: #121212;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  background: #1f1f1f;
  border-radius: 10px;
  box-shadow: -3px 3px 15px 0px rgba(6, 12, 171, 0.75);
  -webkit-box-shadow: -3px 3px 15px 0px rgba(6, 12, 171, 0.75);
  -moz-box-shadow: -3px 3px 15px 0px rgba(6, 12, 171, 0.75);
  color: #fff;
  padding: 20px;
  margin: 20px;
  transition: transform 0.8s;

  &:hover {
    transform: scale(1.05);
    box-shadow: none;
  }

  h1 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #e3e3e3;
  }

  p {
    font-size: 1em;
    margin: 5px 0;
    color: #b0b0b0;
  }
`
