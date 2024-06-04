import React from "react";

const HomeImage = () => {
  return (
    <>
      <div class="home-image">
        <img src="./src/assets/vesikalik.jpg" alt="Atakan Altunbas" />
        <div class="home-image-text">
          <h4>Atakan Altunbaş</h4>
          <p class="subtitle">Computer Engineer</p>
          <p class="body">
            I have joined Turkcell's Front-End Bootcamp in March 2024 and I
            continue. I want to improve myself in Web Programming.
          </p>
          <div class="home-links flex jc-fstart gap-1">
            <a href="#">LINKEDIN</a>
            <a href="#">GITHUB</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeImage;
