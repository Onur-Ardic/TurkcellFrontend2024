import coding from "../assets/picofsomcoding.jpg";
const About = () => {
  return (
    <>
      <div id="about" className="container col-xxl-9 mb-5">
        <div className=" row">
          <h5 className="text-secondary text-center">Get To Know More</h5>
          <h1 className="text-center">About Me</h1>
          <div className="col-12 col-lg-6">
            <img src={coding} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-6">
            <p className="text-secondary fs-5">
              Hello! I&apos;m Umutcan, a freelance frontend developer passionate
              about bringing web projects to life. Proficient in HTML, CSS,
              JavaScript, React, and Node.js, I create modern, user-friendly
              applications. My design skills using Figma enable me to
              collaborate closely with clients. I&apos;m committed to continuous
              improvement, embracing industry innovations for optimal project
              outcomes. Let&apos;s work together to elevate your projects!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
