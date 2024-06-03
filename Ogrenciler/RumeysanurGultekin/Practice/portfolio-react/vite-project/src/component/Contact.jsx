import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Contact = () => {
    const Section = styled.div`
    border: 5px solid darkgrey;
    border-radius: 50px;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 50px;
   `

  return (
    <Section>  
        <h1>Contact </h1>
        <form>
            <div className='mb-3 mt-4'>
                <label className='d-flex flex-column mb-2'>Adınızı Giriniz:</label>
                <input type="text" placeholder="Adınızı Giriniz"/>
            </div>
            <div className='mb-3'>
                <label className='d-flex flex-column mb-2'>Email Adresini Giriniz:</label>
                <input type="text" placeholder="Email Adresinizi Giriniz"/>
            </div>
            <div className='mb-3'>
                <label className='d-flex flex-column mb-2'>Mesajınızı Giriniz:</label>
                <input type="text" placeholder="Mesajınızı Giriniz"/>
            </div>
            <button className='mt-3 btn btn-white border-dark'>Send Me.!</button>
            
        </form>
    </Section>
  )
}

export default Contact