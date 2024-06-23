import React from 'react'

const PortfolioItem = ({projectName, projectImage,code,project}) => {
  return (
    <>
      <div className='card'>
        <div className="card-header">
          <img src={projectImage} alt="Project Image" className='img-fluid' />
        </div>
        <div className="card-body">
        <p className="fs-4 fw-bold text-center">
          {projectName}
        </p>
        </div>
        <div className="card-footer d-flex justify-content-center gap-5">
          <a href={code} target='_blank'><button className="btn btn-dark">Go To Codes</button></a>
          <a href={project} target='_blank'><button className="btn btn-primary">Go To Project</button></a>
        </div>
      </div>
    </>
  )
}

export default PortfolioItem