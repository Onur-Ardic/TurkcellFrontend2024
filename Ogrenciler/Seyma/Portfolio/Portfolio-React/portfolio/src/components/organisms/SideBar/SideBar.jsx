import React, {useState} from 'react'
import './SideBar.css'
import { GithubCard } from '../../molecule/GithubCard';

export const SideBar = ({data}) => {

  const [isHovered, setIsHovered] = useState(false);
  
  const handleHover = () => {
    setIsHovered(true);
  }
  const closeHover = () => {
    setIsHovered(false);
  }

  const sideBarStyle = {
    width: isHovered ? '45rem': '24rem',
    transition: '0.3s',
  };
  const displayBlock = {
    visibility: isHovered ? 'visible': 'hidden',
  };

  return (
    <div  className='sideBarContent' onMouseLeave={closeHover} style = {sideBarStyle} >
      <div className='row'> 
      <div className='col-6'>
      <h2 className='mt-4 text-white'>Social Accounts</h2>
      <p className='text-white'>See my profiles on social platforms. You can reach me from these platforms.</p>
      <a className='button' href="https://github.com/seymabyzt">Discover</a>
      <div className='social gap-2'>
        <div className='socialLogo'onMouseOver={handleHover} ><img src="https://r.resimlink.com/uJ2XnhpqL.png" alt="" /></div>
        <div className='socialLogo' ><img src="https://r.resimlink.com/rRaKU-W.png" alt="" /></div>
        <div className='socialLogo'><img src="https://r.resimlink.com/UJ5dhoHyjbL.png" alt="" /></div>
        <div className='socialLogo'  ><img src="https://r.resimlink.com/0EldvkM.png" alt="" /></div>
      </div>
      </div>
    <div className='col-6' style = {displayBlock}>
    {data ? <GithubCard user={data} /> : <p className="text-white">Loading...</p>}
    </div>
      </div>
      
    </div>
  )
}
