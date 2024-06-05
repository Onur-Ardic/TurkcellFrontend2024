import "./App.css";
import profil from "./assets/profil.png";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1>Alpay Özer</h1>
          <span>Frontend Developer</span>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <img
            src={profil}
            className="img-fluid rounded-circle"
            alt="profil-img"
          />
          <div className="icon-group">
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-github"></i>
            <i class="bi bi-envelope"></i>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="row">
          <div className="col-lg-3">
            <div className="project-card">
              <img
                src="https://via.placeholder.com/300"
                className="img-fluid"
                alt="project-img"
              />
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, doloremque.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="project-card">
              <img
                src="https://via.placeholder.com/300"
                className="img-fluid"
                alt="project-img"
              />
              <h3>Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, doloremque.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="project-card">
              <img
                src="https://via.placeholder.com/300"
                className="img-fluid"
                alt="project-img"
              />
              <h3>Project 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, doloremque.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="project-card">
              <img
                src="https://via.placeholder.com/300"
                className="img-fluid"
                alt="project-img"
              />
              <h3>Project 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, doloremque.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="technology">
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-bootstrap"></i>
        <i class="fa-brands fa-figma"></i>
      </div>
      <h1>Yılan oyunu</h1>
      <iframe
        src="game.html"
        width="800"
        height="600"
        title="HTML Oyun"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default App;
