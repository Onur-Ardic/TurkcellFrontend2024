import styled from "styled-components";

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
  margin-bottom: 16px;
  select {
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    option {
      padding: 8px;
    }
  }
`;
export const News = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

export const NewCard = styled.div`
position:relative;
  flex: 0 1 22%;
  max-width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  margin: 16px;
  text-decoration: none;
  a {
    color: black;
    text-decoration: none;
    display:flex;
    flex-direction:column;
    align-items: center;
    height: 100%;
    padding: 2px 10px;

  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  h3 {
    text-decoration: none;
    text-align:left
  }
  p{
    text-align:left;
    padding-bottom: 3rem
  }
  i{
  position:absolute;
  bottom: 0;
  right: 0;
  margin: 8px;
  padding: 10px 5px;
  font-size: 14px;
  }
    
`;

export const NavbarItem = styled.li`
  padding: 1rem;
  color: ${(props) => (props.active ? "blue" : "black")};
  a {
    text-decoration: none;
    color: ${(props) => (props.active ? "blue" : "black")};
  }
`;

export const FormGroup = styled.div`
display:flex;
align-items:baseline;
gap:16px
`
