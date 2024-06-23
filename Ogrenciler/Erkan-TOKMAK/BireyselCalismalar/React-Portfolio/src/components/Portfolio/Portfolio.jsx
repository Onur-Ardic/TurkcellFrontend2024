import React from 'react'
import PortfolioItem from './PortfolioItem'
import UpstartImg from '../../assets/upstart.png'
import BiniogImg from '../../assets/biniog.png'
import DrucoImg from '../../assets/druco.png'
import AgonImg from '../../assets/agon.png'
import DirectoryadsImg from '../../assets/directoryads.png'
import SmratposImg from '../../assets/smartpos.png'

const Portfolio = () => {
  const projects = [
     {
      projectName: 'Upstart',
      projectImage: UpstartImg,
      Code: 'https://github.com/erkantokmak/upstart-turkcell-bootcamp-project',
      Project: 'https://upstartproje.netlify.app'
    },
    {
      projectName: 'Biniog',
      projectImage: BiniogImg,
      Code: 'https://github.com/erkantokmak/biniog-turkcell-gelecegi-yazanlar-bootcamp-project',
      Project: 'https://biniog.netlify.app/'
    },
   {
      projectName: 'Druco',
      projectImage: DrucoImg,
      Code: 'https://github.com/erkantokmak/druco-turkcell-gelecegi-yazanlar-project',
      Project: 'https://druco.netlify.app/'
    },
    {
      projectName: 'Agon',
      projectImage: AgonImg,
      Code: 'https://github.com/erkantokmak/agon-turkcell-gelecegi-yazanlar-project',
      Project: 'https://agonproject.netlify.app/'
    },
     {
      projectName: 'DirectoryAds',
      projectImage: DirectoryadsImg,
      Code: 'https://github.com/erkantokmak/directoryads-turkcell-gelecegi-yazanlar-project',
      Project: 'https://directoryadsproje.netlify.app/'
    },
  {
    projectName: 'SmartPos',
      projectImage: SmratposImg,
        Code: 'https://github.com/erkantokmak/smratpos-turkcell-gelecegi-yazanlar-project',
          Project: 'https://smartposproject.netlify.app/'
  }
  ]

return (
  <>
    <div className="row">
      <h2 className='text-center text-white mt-5 py-5'>My Projects</h2>
    </div>
    <div className='row py-5'>
      {
        projects.map((project, index) => <div className='col-md-6 py-5'>
          <PortfolioItem key={index} projectName={project.projectName} projectImage={project.projectImage} code={project.Code} project={project.Project} />
        </div>)}
      {/* }
        <div className='col-md-6 py-5'>
          <PortfolioItem projectName={projects.Upstart.projectName} projectImage={UpstartImg} Code={ } Project={ } />
        </div>
        <div className="col-md-6 py-5">
          <PortfolioItem projectName={'Biniog'} projectImage={BiniogImg} Code={ } Project={ } />
        </div>
        <div className="col-md-6 py-5">
          <PortfolioItem projectName={'Druco'} projectImage={DrucoImg} Code={ } Project={ } />
        </div>
        <div className="col-md-6 py-5">
          <PortfolioItem projectName={'Agon'} projectImage={AgonImg} Code={ } Project={ } />
        </div>
        <div className="col-md-6 py-5">
          <PortfolioItem projectName={'DirectoryAds'} projectImage={DirectoryadsImg} Code={ } Project={ } />
        </div>
        <div className="col-md-6 py-5">
          <PortfolioItem projectName={'SmartPos'} projectImage={SmratposImg} Code={ } Project={ } />
        </div> */}
    </div>
  </>
)
}

export default Portfolio