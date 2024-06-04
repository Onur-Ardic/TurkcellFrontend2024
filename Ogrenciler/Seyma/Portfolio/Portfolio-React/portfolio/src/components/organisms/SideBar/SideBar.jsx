import React from 'react'
import styles from './SideBar.module.css'
export const SideBar = () => {
  return (
    
    <div className='sideBarContent'>
    <h2 className='mt-4'>Social Accounts</h2>
    <p>See my profiles on social platforms. You can reach me from these platforms.</p>
   
  <a className='button' href="https://github.com/seymabyzt">Discover</a>
  <div className='social'>
      <div className='socialLogo'><img src="https://pbs.twimg.com/profile_images/1372304699601285121/5yBS6_3F_400x400.jpg" alt="" /></div>
      <div className='socialLogo'><img src="https://pbs.twimg.com/profile_images/636661084720500737/_QglFGym_400x400.jpg" alt="" /></div>
      <div className='socialLogo'><img src="https://cdn.webrazzi.com/uploads/2023/04/linkedin-921.png" alt="" /></div>
      <div className='socialLogo'><img src="https://codersclub.co/codersclub.svg" alt="" /></div>
    </div>
  </div>
  )
}
