import React, { useState } from 'react';
import styled from "styled-components";
import Rumeysa from '../assets/rumeysa.jpg';

const Aboutme = () => {
    const [showProfile, setShowProfile] = useState(true);

    const CardTitle = styled.h4`
        font-size: 35px;
        margin-top: 10px;
        margin-bottom: 50px;
    `;

    const Baslik = styled.h5`
        font-size: 20px;
        margin-bottom: 10px;
        margin-top: 50px;
    `;

    const Section = styled.div`
        display: ${showProfile ? 'flex' : 'none'};
        flex-direction: row;
        gap: 50px;
        align-items: center;
    `;

    const Left = styled.div`
        flex: 5;
    `;

    const Right = styled.div`
        flex: 3;
    `;

    const changeProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <div id='aboutme'>
            <Section>
                <Left>
                    <h1><span>Welcome to my portfolio..</span></h1>
                    <Baslik>FRONTEND DEVELOPER</Baslik>
                    <CardTitle>Rümeysanur Gültekin</CardTitle>
                    <Baslik> Turkcell Geleceği Yazılım Projesi kapsamında "Front End Developer" eğitimi almaktayım. </Baslik>
                </Left>
                <Right>
                    <img src={Rumeysa} style={{width:"60%", borderRadius:"150px"}} alt="Rumeysa's profile"></img>
                </Right>
            </Section>  

            <Section id='diyetisyen' style={{display: showProfile ? 'none' : 'block'}}>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <Left>
                        <h1><span>Welcome to my portfolio..</span></h1>
                        <Baslik>UZMAN DİYETİSYEN </Baslik>
                        <CardTitle>Rümeysanur Gültekin</CardTitle>
                        <Baslik> İMÜ Beslenme ve Diyetetik mezunuyum. Bilgi Üniversitesi "Beslenme ve Diyetetik" bölümünü başarıyla bitirerek "Uzman" unvanını aldım.</Baslik>
                    </Left>
                    <Right>
                        <img src={Rumeysa} style={{width:"60%", borderRadius:"150px"}} alt="Rumeysa's profile"></img>
                    </Right>
                </div>
            </Section> 

            <button onClick={changeProfile} >Profili Değiştir</button>
        </div>
    );
};

export default Aboutme;

