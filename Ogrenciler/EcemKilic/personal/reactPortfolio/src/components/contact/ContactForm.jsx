import React, { useState } from 'react';
import { FormContainer, FormTitle, Form, FormLabel, FormInput, FormTextarea, FormButton } from './ContactFormStyles';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <FormContainer id='contactForm'>
      <FormTitle>Contact Us</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <FormLabel htmlFor="message">Message:</FormLabel>
        <FormTextarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          rows="6" 
          required 
        />
        <FormButton type="submit">Send Message</FormButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;