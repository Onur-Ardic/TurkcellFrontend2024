import React from 'react'

function Project({link,img}) {
  return (
        <div>
            <a href={link} target="_blank">
                <img src={img} />
            </a>
        </div>  
  )
}

export default Project