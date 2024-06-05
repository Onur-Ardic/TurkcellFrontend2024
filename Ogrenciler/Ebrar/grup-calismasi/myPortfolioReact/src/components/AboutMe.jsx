import React from "react";
import styled, { keyframes } from "styled-components";
import ebrarImg from "../assets/ebrar2.jpg";

const animateImgCircle = keyframes`
  0% {
    top: 20px;
    right: 20px;
  }
  50% {
    top: 20px;
    right: 30px;
    border-color: rgb(69, 60, 58);
  }
  100% {
    top: 20px;
    right: 20px;
  }
`;

const animateImgCircle2 = keyframes`
  0% {
    top: -350px;
  }
  100% {
    top: -150px;
    border-color: rgb(69, 60, 58);
  }
`;

const AboutMeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutMeTexts = styled.div`
  font-size: 8rem;
  color: white;
  font-style: italic;
  display: flex;
  flex-direction: column;

  gap: 40px;
  @media (max-width: 768px) {
    font-size: 4rem;
    max-width: 100%;
    text-align: center;
  }
`;
const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;

  input {
    background-color: white;
    padding: 20px 84px 20px 15px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 5px rgb(104, 93, 240, 0.4);

    &::placeholder {
      font-size: 20px;
      text-align: left;
      color: black;
    }
  }

  button {
    background-color: white;
    padding: 16px 30px;
    border: none;
    border-radius: 5px;
    text-align: left;
    font-size: 20px;
    color: black;
    box-shadow: 0px 0px 10px 5px rgb(104, 93, 240, 0.4);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;

    img {
      width: 60px;
    }

    input {
      padding: 15px 60px 15px 10px;
    }

    button {
      padding: 12px 20px;
    }
  }
`;

const AboutMeImg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 2px solid #fafafa;
    z-index: 2;
    animation: ${animateImgCircle} 4s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -25rem;
    width: 700px;
    height: 700px;
    border: 1px solid #fff;
    border-radius: 50%;
    z-index: 0;
    animation: ${animateImgCircle2} 6s linear infinite alternate;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    &::before,
    &::after {
      display: none;
    }
  }
`;

const ImgBox = styled.div`
  width: 30rem;
  height: 30rem;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0px 0px 29px 2px rgb(104, 93, 240);

  img {
    width: auto;
    height: 100%;
    margin-left: 4rem;
  }
  @media (max-width: 768px) {
    width: 20rem;
    height: 20rem;
    img {
      margin-left: 2rem;
    }
  }
`;

const ImgTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2rem;
  color: white;
  z-index: 99;

  h4 {
    font-size: 3.2rem;
  }

  p {
    text-transform: uppercase;
    font-size: 2rem;
  }

  .social-media {
    font-size: 1.6rem;
    display: flex;
    flex-direction: center;
    gap: 2rem;

    a {
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      color: white;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: rgb(104, 93, 240);
        transition: width 0.5s ease-out;
        z-index: 99;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;

    h4 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.6rem;
    }

    .social-media {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

const AboutMe = () => {
  return (
    <AboutMeContainer className="about-me container">
      <AboutMeTexts className="about-me-texts">
        <h1>
          Let's <br />
          Work{" "}
          <b
            style={{
              color: "#512354",
              textShadow: "1px 1px 2px black, 0 0 25px purple, 0 0 5px white",
            }}>
            Together
          </b>
        </h1>

        <p className="subtitle"></p>
        <FormContainer action="">
          <input type="email" placeholder="Get in Touch.." />
          <button>Send</button>
        </FormContainer>
        <p></p>
      </AboutMeTexts>
      <AboutMeImg className="about-me-img">
        <ImgBox className="img-box">
          <img src={ebrarImg} alt="Ebrar Nur Çalışkan" />{" "}
        </ImgBox>
        <ImgTexts className="img-texts">
          <h4>Ebrar Nur Çalışkan</h4>
          <p className="subtitle">Front-End Developer</p>
          <div className="social-media">
            <a href="">Linkedin</a>
            <a href="">Github</a>
            <a href="">Instagram</a>
          </div>
        </ImgTexts>
      </AboutMeImg>
    </AboutMeContainer>
  );
};

export default AboutMe;
