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
      <a className='button' href="https://github.com/seymabyzt" target='_blank'>Discover</a>
      <div className='social gap-2'>
        <a className='socialLogo'onMouseOver={handleHover}target='_blank' ><img src="https://r.resimlink.com/uJ2XnhpqL.png" alt="" /></a>
        <a target='_blank' href='https://medium.com/@bayezittseyma' className='socialLogo' ><img src="https://r.resimlink.com/rRaKU-W.png" alt="" /></a>
        <a target='_blank' href='https://www.linkedin.com/in/seyma-bayezit-009509170/' className='socialLogo'><img src="https://r.resimlink.com/UJ5dhoHyjbL.png" alt="" /></a>
        <a target='_blank' href='https://www.behance.net/eymabayezit' className='socialLogo'  ><img src="https://r.resimlink.com/0EldvkM.png" alt="" /></a>
      </div>
      </div>
    <div className='col-6' style = {displayBlock}>
    {data ? <GithubCard user={data} /> : <p className="text-white">Loading...</p>}
    </div>
      </div>
      
    </div>
  )
}
