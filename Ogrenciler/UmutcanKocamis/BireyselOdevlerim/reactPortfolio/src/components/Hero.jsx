import profile from "../assets/profile-pic.jpg";

const Hero = () => {
  return (
    <div>
      <div id="hero" className="container col-xxl-9 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center ">
            <img
              src={profile}
              className="d-block mx-lg-auto img-fluid rounded-5"
              alt="Bootstrap Themes"
              width={350}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 text-center d-flex row gap-2">
            <h4 className="text-secondary">Hello, I&apos;m</h4>
            <h1 className="fw-bolder">Umutcan Kocamış</h1>
            <h2 className="text-secondary mb-5">Frontend Developer</h2>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <a href="../src/assets/cv.pdf" target="_blank">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-md rounded-5 px-5 py-3 me-md-2"
                >
                  Download CV
                </button>
              </a>
              <a href="#contact">
                <button
                  type="button"
                  className="btn btn-dark rounded-5 btn-md px-5 py-3"
                >
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
