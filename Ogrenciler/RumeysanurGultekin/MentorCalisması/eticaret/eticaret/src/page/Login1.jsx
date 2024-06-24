import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5
    overflow: hidden
    width: 100%;
`;

const Loginform = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    gap: 10px; 
    justify-content: center;`

const Input = styled.input`
    padding: 10px; 
    background-color: white;
    color: black;`
    

const Login1 = () => {
  return (
    <Container >
        <h1>Bize Katılın</h1>
        <form style={{display:'flex', flexDirection:'column', gap:'20px', margin:'20px 200px'}}>
            <Loginform>
                <label>Adınız-Soyadınız:</label>
                <Input type="text" name="name" id="name" placeholder="Adınız-Soyadınız:"/></Loginform>
            <Loginform>
                <label>Mail Adresiniz:</label>
                <Input type="email" name="name" id="name" placeholder="Email Adresinizi Giriniz:"/>    
            </Loginform>
            <Loginform>
                <button style={{ color:'black', padding:'10px', marginTop:'20px',background:'#003459', color:'white' , borderRadius:'20px', width:'8rem'}}>Kaydol</button>  
            </Loginform>

        </form>
    </Container>
  )
}

export default Login1