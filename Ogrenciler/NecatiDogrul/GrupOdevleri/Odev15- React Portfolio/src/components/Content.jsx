import React from "react";
import waveImage from "../images/wavy.png";
import arrowImage from "../images/arrow (1).png";
import cvPhoto from "../images/cvPhotoNeco.png";

const Content = () => (
  <div className="content">
    <div className="container">
      <div className="coming-holder row flex-wrap justify-between">
        <div className="coming-text col">
          <h1>Work Portfolio</h1>
          <div
            className="wave"
            style={{ backgroundImage: `url(${waveImage})` }}
          ></div>
          <p className="subtitle">Contact me</p>
          <form className="coming-form row flex-wrap">
            <img src={arrowImage} alt="arrow" className="arrow" />
            <input
              type="text"
              className="email"
              placeholder="Enter your email address to communicate"
            />
            <button className="btn">CONTACT</button>
          </form>
        </div>
        <div className="coming-img">
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
        </div>
      </div>
    </div>
  </div>
);

export default Content;
