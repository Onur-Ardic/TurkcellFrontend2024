const WorkCard = ({projeName}) => {
  return (
    
      <div className="card bg-body-tertiary shadow p-2">
        <img src="https://i2.wp.com/ismailsen.com.tr/wp-content/uploads/2023/12/proje-yonetimi-1242.jpg?w=800" className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="card-title">Proje {projeName}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <a href="https://github.com/kaplanegemen/GYGY3" target="_blank" className="btn btn-outline-dark">
            Github
          </a>
        </div>
      </div>
    
  );
};

export default WorkCard;
