import React from "react";
import Link from "next/link";
import {
  BrowseByDressStyleSection,
  SectionTitle,
  StyleGrid,
  StyleGridTop,
  StyleGridBottom,
  StyleCardCasual,
  StyleCardFormal,
  StyleCardParty,
  StyleCardGym,
} from "./BrowseByDressStyle.style";

const BrowseByDressStyle = () => {
  return (
    <BrowseByDressStyleSection>
      <SectionTitle>Browse By Dress Style</SectionTitle>
      <StyleGrid>
        <StyleGridTop>
          <StyleCardCasual>
            <Link href="/category/casual">Casual</Link>
          </StyleCardCasual>
          <StyleCardFormal>
            <Link href="/category/formal">Formal</Link>
          </StyleCardFormal>
        </StyleGridTop>
        <StyleGridBottom>
          <StyleCardParty>
            <Link href="/category/party">Party</Link>
          </StyleCardParty>
          <StyleCardGym>
            <Link href="/category/gym">Gym</Link>
          </StyleCardGym>
        </StyleGridBottom>
      </StyleGrid>
    </BrowseByDressStyleSection>
  );
};

export default BrowseByDressStyle;
