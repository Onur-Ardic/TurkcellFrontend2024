import styled from "styled-components"

export const H1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  display: flex;
  justify-content: center; 
`

export const WrapperFormGroup = styled.div`
 display: flex;
 justify-content: center; 
 gap: 1rem;
`

export const Input = styled.input`
padding: 0.5rem;
border-radius: 0.3rem;
border: 1px solid black;
`

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: none;
  outline: none;
  background-color: navy;
  color: white;
  &:hover {
    background-color: seagreen;
    cursor: pointer;
    }
`
export const WrapperUserCard = styled.div`
 font-family: "Roboto", sans-serif;
 box-shadow: 0 0 3px black;
 background-color: #31363F;
 color: white;
 border-radius: 1rem;
 width: 30%;
 margin-left: 35%;
 margin-top: 3rem;
 padding: 3rem 0;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 1rem;
 &:hover {
    background-color: azure;
    color: black;
    box-shadow: 0 0 3px white;
    cursor: pointer;
    transition: 0.3s ease-in;
    }
`

export const AvatarImage = styled.img`
 width: 250px;
 border-radius: 50%;
`

export const UserName = styled.h3`
 font-weight: bold;
`