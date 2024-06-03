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
`;

const FormField = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
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
