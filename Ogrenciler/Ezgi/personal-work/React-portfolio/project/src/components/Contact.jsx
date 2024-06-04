import React, { useState } from 'react';
import {ContactContainer, ContactContent, HeadingContact, ContactInfo, Form, Input, TextArea, ButtonContact} from '../components/styled'
import { addContacts } from '../api/API';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await addContacts(formData)
      if(response && response.data){
        setFormData(response.data)
        alert('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    }
    catch (error){
      console.error('Error:', error);
      alert('Failed to send message.');
    }


    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <HeadingContact>Contact Me</HeadingContact>
        <ContactInfo>Email: ezgikarakaya2000@gmail.com</ContactInfo>
        <ContactInfo>Phone: 05078632224</ContactInfo>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
          <ButtonContact type="submit">Send</ButtonContact>
        </Form>
      </ContactContent>
    </ContactContainer>
  );
}

export default Contact;
