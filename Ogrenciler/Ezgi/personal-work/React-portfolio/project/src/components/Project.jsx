import { ProjectCard, ProjectImage, ProjectTitle, ProjectDescription, Overlay, SourceCodeButton, DemoButton } from '../components/styled'


const Project = ({ img, title, description, sourceCodeLink, demoLink }) => {

  return (
    <div>
      <ProjectCard>
        <ProjectImage><img src={`assets/images/${img}`} alt={title} /></ProjectImage>
        <div className="wrapper project-info" style={{ padding: '15px 15px 20px' }}>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
        </div>
        <Overlay className="overlay">
          <SourceCodeButton href={sourceCodeLink} target="_blank">View Source Code</SourceCodeButton>
          <DemoButton href={demoLink} target="_blank">Demo</DemoButton>
        </Overlay>
      </ProjectCard>
    </div>
  )
}

export default Project;