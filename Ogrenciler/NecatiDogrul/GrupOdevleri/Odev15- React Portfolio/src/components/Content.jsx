import React from "react";
import styled, { keyframes } from "styled-components";
import waveImage from "../images/wavy.png";
import arrowImage from "../images/arrow (1).png";
import cvPhoto from "../images/cvPhotoNeco.png";

const waveAnimation = keyframes`
  0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 645px;
  }
`;

const circleAnimation = keyframes`
  0% {
    top: -20px;
    left: -20px;
  }
  50% {
    top: -20px;
    left: 20px;
    border-color: #0c7f86;
  }
  100% {
    top: -20px;
    left: -20px;
  }
`;

const circleBigAnimation = keyframes`
  from {
    top: -70px;
  }
  to {
    top: 10px;
    border-color: #0c7f86;
  }
`;

const ContentContainer = styled.div`
  .container {
    width: 100%;
    max-width: 1200px;
    padding: 0 24px;
    margin: 0 auto;
  }
`;

const ComingHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ComingText = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 120px;
    padding: 100px 0px 20px;
  }

  .wave {
    background-image: url(${waveImage});
    width: 100%;
    height: 20px;
    background-size: 645px 20px;
    background-repeat: repeat-x;
    animation: ${waveAnimation} 15s linear infinite;
    margin: 25px 0;
  }

  p {
    color: #0c7f86;
    font-size: 32px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 30px;
    text-transform: uppercase;
    padding-top: 15px;
  }

  form {
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;

    img {
      width: 34px;
      height: 50px;
    }

    input {
      outline: none;
      font-size: 18px;
      margin: 0 16px;
      border: 1px solid #fff;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0px 0px 30px 7px rgba(12, 127, 134, 0.25);
      transition: 0.5s ease;
      padding: 20px 24px;
      flex-grow: 1;

      &::placeholder {
        color: #0c7f86;
      }
    }

    button {
      font-family: "Poppins";
      padding: 25px 24px;
      border-radius: 10px;
      color: #fff;
      background-color: #0c7f86;
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 4px;
      text-transform: uppercase;
      cursor: pointer;
      border: none;
      transition: 0.5s ease;

      &:hover {
        background-color: #084b4f;
      }
    }
  }
`;

const ComingImg = styled.div`
  max-width: 345px;
  max-height: 670px;
  .img-box {
    position: relative;
    margin: 0 0 32px;

    img {
      max-width: 100%;
      border-radius: 50%;
      z-index: 1;
    }

    &::before {
      content: "";
      position: absolute;
      top: -45px;
      left: -30px;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      border: 3px solid #fafafa;
      z-index: 2;
      pointer-events: none;
      user-select: none;
      animation: ${circleAnimation} 8s linear infinite;
    }

    &::after {
      content: "";
      position: absolute;
      right: -420px;
      top: 0;
      width: 800px;
      height: 800px;
      border: 1px solid #fff;
      border-radius: 50%;
      pointer-events: none;
      user-select: none;
      z-index: 0;
      animation: ${circleBigAnimation} 3s linear infinite alternate;
    }
  }

  .img-content {
    h4 {
      color: #084b4f;
    }

    .subtitle {
      font-size: 16px;
      font-weight: 300;
      line-height: 30px;
      letter-spacing: 5px;
      margin-bottom: 24px;
    }

    .body {
      line-height: 30px;
      margin-bottom: 24px;
    }

    button {
      font-family: "Poppins";
      padding: 25px 24px;
      border-radius: 10px;
      color: #fff;
      background-color: #0c7f86;
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 4px;
      text-transform: uppercase;
      cursor: pointer;
      border: none;
      transition: 0.5s ease;

      &:hover {
        background-color: #084b4f;
      }
    }
  }
`;

const Content = () => (
  <ContentContainer>
    <div className="container">
      <ComingHolder>
        <ComingText>
          <h1>Work Portfolio</h1>
          <div className="wave"></div>
          <p className="subtitle">Contact me</p>
          <form className="coming-form">
            <img src={arrowImage} alt="arrow" className="arrow" />
            <input
              type="text"
              className="email"
              placeholder="Enter your email address to communicate"
            />
            <button className="btn">CONTACT</button>
          </form>
        </ComingText>
        <ComingImg>
          <div className="img-box">
            <img src={cvPhoto} alt="Profile" />
          </div>
          <div className="img-content">
            <h4>Necati Doğrul</h4>
            <p className="subtitle">FRONTEND DEVELOPER</p>
            <p className="body">
              I am a passionate, innovative and result-oriented student and
              front-end developer. I create impressive web applications by
              prioritising the user experience.
            </p>
            <div className="links row flex-wrap justify-between">
              <a href="https://github.com/necatidogrul" className="caption">
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/necatidogrul7/"
                className="caption"
              >
                LINKEDIN
              </a>
              <a href="https://twitter.com/necatidogrul7" className="caption">
                TWITTER
              </a>
            </div>
          </div>
        </ComingImg>
      </ComingHolder>
    </div>
  </ContentContainer>
);

export default Content;
