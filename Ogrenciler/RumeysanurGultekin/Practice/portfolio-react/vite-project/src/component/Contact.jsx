import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Section = styled.div`
border: 5px solid darkgrey;
border-radius: 50px;
margin-top: 200px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
padding: 50px;
`;


const Contact = () => {
   
    const [onname, setOnname] = useState('');
    const [onemail, setOnemail] = useState('');
    const [onmessage, setOnmessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: onname,
                email: onemail,
                message: onmessage
            })
        })
        .then(res => res.json())
        .then(data => {
            
            console.log(data);
        })
        .catch(error => {
            
            console.error('Error:', error);
        });
    };

    return (
        <Section id='contact'>  
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3 mt-4'>
                    <label className='d-flex flex-column mb-2'>Adınızı Giriniz:</label>
                    <input 
                        type="text" 
                        placeholder="Adınızı Giriniz" 
                        name="name" 
                        value={onname}
                        onChange={(e) => setOnname(e.target.value)} 
                    />
                </div>
                <div className='mb-3'>
                    <label className='d-flex flex-column mb-2'>Email Adresini Giriniz:</label>
                    <input 
                        type="text" 
                        placeholder="Email Adresinizi Giriniz" 
                        name="email" 
                        value={onemail}
                        onChange={(e) => setOnemail(e.target.value)} 
                    />
                </div>
                <div className='mb-3'>
                    <label className='d-flex flex-column mb-2'>Mesajınızı Giriniz:</label>
                    <input 
                        type="text" 
                        placeholder="Mesajınızı Giriniz" 
                        name="message" 
                        value={onmessage}
                        onChange={(e) => setOnmessage(e.target.value)} 
                    />
                </div>
                <button className='mt-3 btn btn-white border-dark' type='submit'>Send Me!</button>
            </form>
        </Section>
    );
};

export default Contact;

