import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiCircleCheck } from "react-icons/ci";
import styled from "styled-components";


const Skills = () => {
  const Section = styled.div`
    border: 5px solid darkgrey;
    border-radius: 50px;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 50px;`

    const Skills = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40%;
    gap: 150px;
    padding: 30px;
    `


  return (
    <Section id='skills'>
        <h1>Skills</h1>
        <h5>My technical level</h5>
        <Skills className='mx-auto'>
            <div className='skills1'>
              <ul>
                <li className='d-flex '> 
                  <div><CiCircleCheck className='fs-1 me-3'/></div>
                  <div><h4>HTML</h4>
                  <p>Intermeadiate</p></div>
                
                </li>
                <li className='d-flex '> 
                  <div><CiCircleCheck className='fs-1 me-3'/></div>
                  <div><h4>CSS</h4>
                  <p>Intermeadiate</p></div>
                
                </li>
                <li className='d-flex '> 
                  <div><CiCircleCheck className='fs-1 me-3'/></div>
                  <div><h4>BOOTSTRAP</h4>
                  <p>Intermeadiate</p></div>
                
                </li>
              </ul>
            </div>
            <div className='skills1 text-start'>
              <ul>
              <li className='d-flex '> 
                  <div><CiCircleCheck className='fs-1 me-3'/></div>
                  <div><h4>SASS</h4>
                  <p>Intermeadiate</p></div>
                
                </li> 
                <li className='d-flex '> 
                  <div><CiCircleCheck className='fs-1 me-3'/></div>
                  <div><h4>JAVASCRİPT</h4>
                  <p>Beginner</p></div>
                
                </li>
                <li className='d-flex '> 
                  <div><CiCircleCheck className='fs-1 me-3'/></div>
                  <div><h4>REACT</h4>
                  <p>Beginner</p></div>
                
                </li>
              </ul>
            </div>
        </Skills>
          
    </Section>
  )
}

export default Skills
