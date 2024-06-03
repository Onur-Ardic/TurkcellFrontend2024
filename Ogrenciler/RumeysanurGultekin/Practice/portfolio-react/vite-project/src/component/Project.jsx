import React from 'react'
import WeatherPage from '../assets/weather.png'
import Xox from '../assets/xox.png'
import Cinema from '../assets/cinema.png'
import Xhr from '../assets/xhr.png'
import TodoList from '../assets/todo.png'
import CinemaCard from '../assets/cinemareact.png'
import styled from "styled-components";
import Rum from '../assets/rumeysa.jpg'

const Project = () => {
    const Section = styled.div`
    border: 5px solid darkgrey;
    border-radius: 50px;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 50px;`

    const CardDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        border: 2px solid darkgrey;
        margin-top: 50px;
        background-color: white;
        transition: transform 0.3s ease; 
        
        &:hover {
            transform: scale(1.4); 
        }`

    const ProjectImg = styled.img`
        width: 200px;
        margin-top: 20px;`

  return (
    <Section>
        <h1>Project</h1>
        <div style={{display:"flex",  flexWrap:"wrap", gap:"50px", justifyContent:"center"}}>
            <CardDiv>
                <h5>Weather Project-React</h5>
                <ProjectImg src={WeatherPage} style={{width:"200px"}}></ProjectImg>
            </CardDiv>
            <CardDiv>
                <h5>XOX Project-JS</h5>
                <ProjectImg src={Xox} style={{width:"200px"}}></ProjectImg>
            </CardDiv>
            <CardDiv>
                <h5>Cinema Project-JS</h5>
                <ProjectImg src={Cinema} style={{width:"200px"}}></ProjectImg>
            </CardDiv>
            <CardDiv>
                <h5>Xhr Project-JS</h5>
                <ProjectImg src={Xhr} style={{width:"200px"}}></ProjectImg>
            </CardDiv>
            <CardDiv>
                <h5>TodoList Project-React</h5>
                <ProjectImg src={TodoList} style={{width:"200px"}}></ProjectImg>
            </CardDiv>
            <CardDiv>
                <h5>Cinema Project-React</h5>
                <ProjectImg src={CinemaCard} style={{width:"200px"}}></ProjectImg>
            </CardDiv>
            
           
        
        </div>
    </Section>
  )
}

export default Project