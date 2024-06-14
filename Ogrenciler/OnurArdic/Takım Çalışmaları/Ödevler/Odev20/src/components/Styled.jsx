import styled from 'styled-components'

export const CustomNavbar = styled.nav`
  background-color: #fafafa;
  padding: 1rem 1rem;
  margin-bottom: 10px;
`

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
  align-items: center;
`

export const Formstyle = styled.form`
  background-color: #028391;
  padding: 10px;
  color: black;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  width: 300px;
  align-items: center;
`

export const Title = styled.h2`
  text-align: center;
  margin: 20px;
  font-size: 30px;
`

export const Buttons = styled.button`
  background-color: white;
  color: black;
  padding: 6px;
  width: 80px;
  margin: 5px auto;
  border-radius: 10px;
  border: 1px solid #fff;
  transition: all 0.2s linear;

  &:hover {
    background-color: #028391;
    color: white;
  }
`

export const SignForm = styled.form`
  background-color: #fafafa;
  padding: 30px;
  margin: 10px auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;

  h1 {
    text-align: center;
    font-size: 20px;
  }
`

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const CustomInput = styled.input`
  border: 1px solid #121212;
  border-radius: 5px;
  padding: 3px;
`

export const CustomButton = styled.button`
  border: 1px solid #121212;
  border-radius: 5px;
  padding: 3px;
  background-color: #121212;
  color: white;
  transition: 0.5s ease all;

  &:hover {
    background-color: #fafafa;
    color: black;
  }
`

export const CustomButtonSecond = styled.button`
  border: 1px solid #121212;
  border-radius: 5px;
  background-color: #fafafa;
  padding: 3px;
  transition: 0.5s ease all;

  &:hover {
    background-color: #121212;
    color: #fff;
  }
`
