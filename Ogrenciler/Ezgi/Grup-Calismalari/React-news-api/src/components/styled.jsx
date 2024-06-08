import styled from 'styled-components';

export const NavBar = styled.ul`
  display:flex;
  background-color: 
  width: 100%;
  list-style: none;
  padding: 2rem 0;
  margin: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  li {
    a {
      text-decoration: none;
    }
`;
export const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    `
export const News = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px
`

export const NewCard = styled.div`
    flex: 0 1 22%;
    max-width: 300px; 
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    margin: 16px;
    img{
        width: 100%;  
        height: 200px;
        object-fit: cover;  
    }
`