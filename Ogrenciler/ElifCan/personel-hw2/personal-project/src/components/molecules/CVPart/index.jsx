import React from "react";
import "./cv.css";

const index = () => {
  return (
    <div className="cvpart">
      <h3 className="text-white d-flex justify-content-center py-4">
        More About Me
      </h3>
      <div className=" container d-flex flex-row justify-content-center gap-5 fs-1 mt-3 py-3">
        <div>
          <a href="https://www.instagram.com/_eliffcann/" target="blank">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/elifcan-/">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
        <div>
          <a href="https://github.com/ElifCan7">
            <i class="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
