import React from 'react'
import "../css/Lınk.css"

function Social({socialLink}) {
  return (
    <>
        {
            socialLink?.map((social,index)=>(
                <a className="btn-black" href={social.link} key={index}>
                    <i className={social.icon}></i> {social.name}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            ))
        }
        
    </>
  )
}

export default Social