import styled from "styled-components";

export const Container = styled.div`
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "auto"};
  right: ${(props) => props.right || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;
export const DivColumn = styled(Container)`
  flex-direction: column;
`;
export const ReposDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px 30px;
  margin-top: 2rem;
`;
export const ProfileImg = styled.img`
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "auto"};
  right: ${(props) => props.right || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  border-radius: 50%;
  width: 350px;
  height: 350px;
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5em;
  background-color: transparent;
  color: white;
`;

export const InputButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  overflow: hidden;
`;

export const InputUI = styled.input`
  padding: 0.5em 3em 0.5em 0.5em;
  border: none;
  outline: none;
  border-radius: 0.5em;
`;

export const Button = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: white;
  padding: 0.25em 0.5em;
  cursor: pointer;
  border-radius: 50%;
`;
export const Header = styled.header`
  position: ${(props) => props.position || "static"};
  background-image: url("./src/assets/header.jpeg");
  background-size: cover;
  background-position: center;
  height: 300px;
  color: white;
`;
export const A = styled.a`
  display: block;
  padding: 20px 30px;
  margin: 5px 0;
  background-color: #f0f0f0;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
    transform: translateY(-5px);
    background-color: #e0e0e0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const H2 = styled.h2`
  margin-top: 200px;
`;

export const P = styled.p`
  font-size: 36px;
`;
