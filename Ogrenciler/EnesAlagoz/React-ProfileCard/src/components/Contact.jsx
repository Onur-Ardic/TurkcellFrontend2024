import React from "react";
import { ContactContainer, ContactForm, FormField, Label, Input, TextArea, Button } from "../styles/Styled";

const Contact = () => (
  <ContactContainer id="contactContainer">
    <h2>Contact</h2>
    <ContactForm>
      <FormField>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />
      </FormField>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />
      </FormField>
      <FormField>
        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message" rows="5" required />
      </FormField>
      <Button type="submit">Send</Button>
    </ContactForm>
  </ContactContainer>
);

export default Contact;
