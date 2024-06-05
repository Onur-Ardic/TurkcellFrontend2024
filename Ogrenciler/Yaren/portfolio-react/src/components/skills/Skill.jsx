import React from "react";
import StyledSkill from "./Skill.styled";
import { SkillTitle } from "./Skill.styled";
import FlexRow from "../../style/FlexRow.styled";
import AnimatedTitle from "../../style/AnimatedTitle.styled";
import {
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaSass,
  FaFigma,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMsqlServer, DiPhotoshop, DiIllustrator } from "react-icons/di";
import { SiCanva } from "react-icons/si";

const Skill = () => {
  return (
    <StyledSkill>
      <SkillTitle>
        <AnimatedTitle>Yetkinliklerim</AnimatedTitle>
      </SkillTitle>
      <FlexRow>
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <FaBootstrap />
        <FaSass />
        <AiOutlineDotNet />
        <DiMsqlServer />
        <DiPhotoshop />
        <DiIllustrator />
        <SiCanva />
        <FaFigma />
        <FaReact />
      </FlexRow>
    </StyledSkill>
  );
};

export default Skill;
