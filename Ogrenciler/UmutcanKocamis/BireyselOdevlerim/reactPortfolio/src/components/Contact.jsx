import { BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div id="contact" className="container col-xxl-9">
      <div className="row justify-content-center">
        <h5 className="text-secondary text-center">Get In Touch</h5>
        <h1 className="text-center">Contact Me</h1>
        <div className="col-3">
          <div className=" d-flex justify-content-center align-items-center flex-row gap-5 fs-2">
            <div className="mail d-flex align-items-center ">
              <a href="mailto:umutceaan@gmail.com">
                <BsEnvelopeFill />
              </a>
            </div>
            <div className="social ">
              <a
                href="https://www.linkedin.com/in/umutcankcms/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
