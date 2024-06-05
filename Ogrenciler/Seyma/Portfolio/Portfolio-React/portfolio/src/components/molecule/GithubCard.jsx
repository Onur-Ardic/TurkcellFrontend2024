import React from 'react'
import './GithubCard.module.css'
export const GithubCard = ({user}) => {

  return (
    <> 
    <div className="userInfo">
    <div className="profile">
    <img className="profileImg w-50 mb-3" src={user.avatar_url} alt="" />
    </div>
    <div className="contentRight">
    <h2>{user.name}</h2>
      <i className="bi bi-people-fill"></i> <p> <span className='fw-bold'> Followers:</span> {user.followers}</p>
      <p><span className='fw-bold'>Following: </span> {user.following}</p>
      <p><a href={user.blog} target="blank">
        Blog
      </a> </p>
      <p><span className='fw-bold'>Bio: </span> {user.bio} </p>
      <p> <span className='fw-bold'>Company:</span> {user.company} </p>
      <p> <span className='fw-bold'>Location: </span>{user.location} </p>
      <p> <span className='fw-bold'>Public Repos:</span> {user.public_repos} </p>
    </div>
    </div>
    
    </>
  )
}
