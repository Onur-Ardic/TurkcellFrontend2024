import { myprojects } from "../js/myprojects";

const Projects = () => {
  return (
    <div id="projects" className="container col-xxl-9">
      <div className="row">
        <h5 className="text-secondary text-center">Browse my Recent</h5>
        <h1 className="text-center mb-5">Projects</h1>
        <div className=" d-flex justify-content-around align-items-center mb-5 flex-wrap">
          {myprojects.map((data, index) => (
            <div key={index}>
              <div className="card col-12 ">
                <img src={data.url} alt="" className="img-fluid" width={350} />
                <div className="card-body">
                  <p className="card-text text-center fs-3">{data.title} </p>
                  <div className="d-flex justify-content-center gap-3">
                    <a
                      href="#"
                      className="btn btn-outline-dark btn-lg rounded-5 px-3 fs-5 "
                    >
                      Github
                    </a>
                    <a
                      href="#"
                      className="btn btn-outline-dark btn-md rounded-5 px-3 fs-5 "
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
