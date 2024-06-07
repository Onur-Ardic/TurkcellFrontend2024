import React from "react";
import { FooterContainer, FooterText } from "./FooterStyles";

export default function Footer(props) {
  return (
    <FooterContainer>
        <FooterText>
            Made with <span role="img" aria-label="heart">❤️</span> by Ecem Kılıç
        </FooterText>
    </FooterContainer>
  );
}