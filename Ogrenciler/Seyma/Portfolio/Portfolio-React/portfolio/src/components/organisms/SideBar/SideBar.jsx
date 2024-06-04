import React, {useState} from 'react'
import './SideBar.css'

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
    transition: '0.3s',
  };

  return (
    <div  className='sideBarContent' id='sideBarId' style = {sideBarStyle} >
      <h2 className='mt-4 text-white'>Social Accounts</h2>
      <p className='text-white'>See my profiles on social platforms. You can reach me from these platforms.</p>
      <a className='button' href="https://github.com/seymabyzt">Discover</a>
      <div className='social'>
        <div className='socialLogo' onMouseLeave={closeHover} onMouseOver={handleHover} ><img src="https://pbs.twimg.com/profile_images/1372304699601285121/5yBS6_3F_400x400.jpg" alt="" /></div>
        <div className='socialLogo' onMouseOver={handleHover} ><img src="https://pbs.twimg.com/profile_images/636661084720500737/_QglFGym_400x400.jpg" alt="" /></div>
        <div className='socialLogo' onMouseOver={handleHover} ><img src="https://cdn.webrazzi.com/uploads/2023/04/linkedin-921.png" alt="" /></div>
        <div className='socialLogo' onMouseOver={handleHover} ><img src="https://codersclub.co/codersclub.svg" alt="" /></div>
      </div>
    </div>
  )
}
