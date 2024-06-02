import React from "react";

import Flex from "../../style/FlexColumn.styled";
import FlexRow from "../../style/FlexRow.styled";
import { TbCat } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import AnimatedTitle from "../../style/AnimatedTitle.styled";
import StyledAbout, {
  AboutSection,
  AboutTitle,
  AboutParagraph,
  Icons,
} from "./About.styled";
import { Logo } from "../header/Header.styled";
import Foto from "../../assets/pc.png";
const About = () => {
  return (
    <StyledAbout>
      <AnimatedTitle>Hakkımda</AnimatedTitle>
      <FlexRow>
        <Flex>
          <Logo src={Foto}></Logo>

          <div>
            <h3>Yaren Su</h3>
          </div>
        </Flex>

        <AboutSection>
          <Flex>
            <Icons>
              <FaHeart />

              <TbCat />
              <FaHeart />

              <TbCat />

              <FaHeart />

              <TbCat />
              <AboutTitle>Selam</AboutTitle>
              <TbCat />
              <FaHeart />
              <TbCat />
              <FaHeart />
              <TbCat />
              <FaHeart />
            </Icons>

            <AboutParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              officia, voluptatum, quos, inventore quae quas voluptatem
              consequuntur dolorum nemo doloremque quidem. Quisquam, doloremque
              quidem. Quisquam, doloremque quidem. Quisquam, doloremque quidem.
            </AboutParagraph>
          </Flex>
        </AboutSection>
      </FlexRow>
    </StyledAbout>
  );
};

export default About;
