const AboutMe = () => {
  return (
    <>
      <div id="aboutMe" className="container personal pt-4 d-flex flex-column flex-md-row justify-content-between">
        <div className="card col-md-3 p-2 text-center bg-body-tertiary shadow">
          <img
            className="rounded-circle img-fluid mb-3 w-75 mx-auto"
            src="https://media.licdn.com/dms/image/C4D03AQHNCSapJnznyw/profile-displayphoto-shrink_800_800/0/1660571995973?e=1723075200&v=beta&t=QNeocCk5sRWGTrOXi-FNbOaAag-PQgnv0rsJ8G3Kikk"
            alt=""
          />
          <p className="fw-bold fs-2">Egemen Kaplan</p>
          <p className="fw-bold fs-5">Front End Developer</p>
          <p className="fs-6">egemenkaplan.98@gmail.com</p>
          <a href="../src/assets/egemenCV.pdf" target="_blank">
                <button
                  type="button"
                  className="btn btn-outline-dark px-4 py-2 rounded mb-2"
                >
                  Download CV
                </button>
              </a>
        </div>
        <div className="col-md-8">
          <h2>Hakkımda</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            fugiat laborum nemo nulla maxime corporis iste praesentium iusto
            illo neque perspiciatis, ipsa, facere natus eaque quos nihil, quis
            esse velit accusamus unde? Corporis ipsum debitis modi unde et, ipsa
            eius quam excepturi ea nihil neque molestiae vel maiores a suscipit!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
