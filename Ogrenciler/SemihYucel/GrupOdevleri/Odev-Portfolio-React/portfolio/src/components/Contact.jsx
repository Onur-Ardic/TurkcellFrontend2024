import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 2rem;
  background-color: #222;
  color: #fff;
  text-align: center;
  width: 100%;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 2px solid #fff;
  border-radius: 8px;
  background-color: #333;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ccc; 
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #444;
  color: #fff;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #444;
  color: #fff;
  resize: none;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #777;
  }
`;

const Contact = () => (
  <ContactContainer id="contact">
    <h2>İletişim</h2>
    <ContactForm>
      <FormField>
        <Label htmlFor="name">İsim</Label>
        <Input type="text" id="name" name="name" required />
      </FormField>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />
      </FormField>
      <FormField>
        <Label htmlFor="message">Mesaj</Label>
        <TextArea id="message" name="message" rows="5" required />
      </FormField>
      <Button type="submit">Gönder</Button>
    </ContactForm>
  </ContactContainer>
);

export default Contact;
