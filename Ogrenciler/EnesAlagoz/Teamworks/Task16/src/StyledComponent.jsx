import styled from "styled-components";
export const SearchForm = styled.form`
  margin-bottom: 2rem;
`;
export const SearchInput = styled.input`
  width: 250px;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 10px 0 0 10px;
`;
export const SearchBtn = styled.button`
  background-color: #ffffff3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 0 10px 10px 0;
  &:hover {
    background-color: #ffffffab;
    color: black;
  }
`;
export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
`;
export const NavLinkDiv = styled.div`
  width: 100px;
  padding: 10px 0;
  border-radius: 5px;
  margin: 0px 10px;
  background-color: #ffffff3c;
  &:hover {
    background-color: #ffffffab;
    color: black;
  }
`;
export const ShowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 20px;
  justify-content: center;
`;
export const LoadingP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 3rem;
`;
export const CardContainer = styled.div`
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
  background-color: whitesmoke;
  border-radius: 10px;
  min-height: 500px;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 5px 15px;
`;
export const CardImg = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
export const CardBody = styled.div`
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const CardTitle = styled.h5`
  font-size: 20px;
  margin: 16px;
`;
export const CardSubtitle = styled.h6`
  color: gray;
  margin-bottom: 16px;
`;
export const CardBtn = styled.a`
  padding: 10px 20px;
  width: max-content;
  background-color: #7e40f6;
  border-radius: 5px;
  margin-bottom: 12px;
  &:hover {
    background-color: #37049e;
  }
`;
