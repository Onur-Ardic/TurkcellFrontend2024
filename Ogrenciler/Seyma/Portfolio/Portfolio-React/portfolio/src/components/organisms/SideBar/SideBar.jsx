import React, {useState} from 'react'
import './SideBar.css'
import { GithubCard } from '../../molecule/GithubCard';

export const SideBar = () => {

  const [isHovered, setIsHovered] = useState(false);
  
  const handleHover = () => {
    setIsHovered(true);
  }
  const closeHover = () => {
    setIsHovered(false);
  }

  const sideBarStyle = {
    width: isHovered ? '50rem': '24rem',
    transition: '0.5s',
  };
  const displayBlock = {
    display: isHovered ? 'block': 'none',
  };

  return (
    <div  className='sideBarContent' onMouseLeave={closeHover} style = {sideBarStyle} >
      <div className='row'> 
      <div className='col-6'>
      <h2 className='mt-4 text-white'>Social Accounts</h2>
      <p className='text-white'>See my profiles on social platforms. You can reach me from these platforms.</p>
      <a className='button' href="https://github.com/seymabyzt">Discover</a>
      <div className='social'   >
        <div className='socialLogo'onMouseOver={handleHover} ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" alt="" /></div>
        <div className='socialLogo' onMouseOver={handleHover}><img src="https://whatthelogo.com/storage/logos/behance-icon-179790.png" alt="" /></div>
        <div className='socialLogo'onMouseOver={handleHover}><img src="https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="" /></div>
        <div className='socialLogo'  onMouseOver={handleHover}><img src="https://codersclub.co/codersclub.svg" alt="" /></div>
      </div>
      </div>
    <div className='col-6' style = {displayBlock}>
      <GithubCard />
    </div>
      </div>
      
    </div>
  )
}
