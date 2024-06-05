import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import {
  FooterSection,
  SubscribeForm,
  SubscribeInput,
  SubscribeButton,
} from "../styles/CustomComponents";

const Footer = () => {
  return (
    <FooterSection>
      <div id="subscribe">
        <SubscribeForm>
          <IoCodeSlash />
          <SubscribeInput
            type="email"
            placeholder="Enter your email address to subscribe..."
          />
          <SubscribeButton>SUBSCRIBE</SubscribeButton>
        </SubscribeForm>
      </div>
    </FooterSection>
  );
};

export default Footer;
