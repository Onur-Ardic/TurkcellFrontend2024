import React from "react";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";

const HomeText = () => {
  return (
    <>
      <div class="home-text">
        <h1>
          Work
          <br />
          in Progress
        </h1>
        <div class="wave-image"></div>
        <p className="animate__animated animate__fadeOut animate__slow	1s animate__infinite	infinite">
          COMING SOON
        </p>
        <div class="email-block flex jc-sbetween ai-center">
          <img src="./src/assets/right-arrow.png" alt="Right Arrow" />
          <Input
            type="email"
            placeholder="Enter your email address to subscribe..."
          />
          <Button type="submit" text="SUBSCRIBE" />
        </div>
      </div>
    </>
  );
};

export default HomeText;
