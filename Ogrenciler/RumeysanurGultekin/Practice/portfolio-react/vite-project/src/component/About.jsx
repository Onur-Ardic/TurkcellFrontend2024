import React from 'react'
import styled from "styled-components";


const About = () => {

  const CardTitle = styled.h4`
   font-size: 35px;
   margin-top: 50px;
   margin-bottom: 50px;
  `;

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
      <h1><span>Welcome to my portfolio..</span></h1>
      <div style={{flex:"4"}}>
        <CardTitle>Rümeysanur Gültekin</CardTitle>
        <h5 style={{ marginBottom: "50px" }}>DYT - FRONTEND DEVELOPER</h5>
        <h5> Ben Rümeysanur Gültekin. İMÜ Beslenme ve Diyetetik mezunuyum. Şuanda kendi mesleğimle ilgilenmiyorum. Turkcell Geleceği Yazılım Projesi kapsamında "Front End Developer" eğitimi almaktayım. </h5>
      </div>
    </div>
  )
}

export default About