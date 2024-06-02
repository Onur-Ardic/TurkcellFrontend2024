import React from 'react'
import styled from "styled-components";
import Rumeysa from '../assets/rumeysa.jpg'
const Aboutme = () => {

const CardTitle = styled.h4`
   font-size: 35px;
   margin-top: 50px;
   margin-bottom: 50px;
  `;

const Baslik = styled.h5`
    font-size: 20px;
    margin-bottom: 50px;`

const Section = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px`

const Left = styled.div`
    flex: 5 `
const Right = styled.div`
    flex: 3;`


  return (
    <Section>
        <Left>
            <h1><span>Welcome to my portfolio..</span></h1>
            <CardTitle>Rümeysanur Gültekin</CardTitle>
            <Baslik>DYT - FRONTEND DEVELOPER</Baslik>
            <Baslik> Ben Rümeysanur Gültekin. İMÜ Beslenme ve Diyetetik mezunuyum. Şuanda kendi mesleğimle ilgilenmiyorum. Turkcell Geleceği Yazılım Projesi kapsamında "Front End Developer" eğitimi almaktayım. </Baslik>
        </Left>
        <Right>
            <img src={Rumeysa} style={{width:"60%", borderRadius:"150px"}}></img>
        </Right>
    </Section>    
       
  )
}

export default Aboutme