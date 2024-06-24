import styled from 'styled-components'

export const CustomNavbar = styled.nav`
  background-color: #1f2937;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
  align-items: center;
`

export const Formstyle = styled.form`
  background-color: #2d3748;
  padding: 20px;
  color: white; /* Beyaz yazı rengi */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  width: 350px;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h2`
  text-align: center;
  margin: 20px;
  font-size: 32px;
  color: #2b6cb0; /* Mavi tonunda başlık */
  font-weight: bold;
`

export const Buttons = styled.button`
  background-color: #2b6cb0;
  color: white;
  padding: 10px;
  width: 100px;
  margin: 10px auto;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background-color: #2d3748;
    color: white;
  }
`

export const BeautifulInput = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6a11cb; /* Odaklandığında border rengi değiştir */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    border-color: #2575fc; /* Üzerine gelindiğinde border rengi değiştir */
  }
`

export const BeautifulButton = styled.button`
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-image: linear-gradient(45deg, #6a11cb, #2575fc);
  border: none;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;

  &:hover {
    background-image: linear-gradient(45deg, #2575fc, #6a11cb);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    background-image: linear-gradient(45deg, #6a11cb, #2575fc);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }
`

export const SignForm = styled.form`
  background-color: #ffffff;
  padding: 30px;
  margin: 20px auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    font-size: 24px;
    color: #2d3748;
  }
`

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CustomInput = styled.input`
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #2b6cb0;
    box-shadow: 0 0 5px rgba(43, 108, 176, 0.5);
    outline: none;
  }
`

export const CustomButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: #2b6cb0;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #2d3748;
    color: white;
  }
`

export const CustomButtonSecond = styled.button`
  border: 1px solid #2b6cb0;
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s ease all;
  color: #2b6cb0;

  &:hover {
    background-color: #2b6cb0;
    color: white;
  }
`
