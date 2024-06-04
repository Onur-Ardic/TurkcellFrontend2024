import React from 'react'
import './GithubCard.module.css'

export const GithubCard = (user ) => {
  return (
    <> 
    <div className="userInfo">
    <div className="profile">
    <img className="profileImg" src={user.avatar_url} alt="" />
    </div>
    <div className="contentRight">
    <h2>{user.name}</h2>
      <i className="bi bi-people-fill"></i> <p>Followers: {user.followers}</p><p>Following: {user.following}</p>
      
      <a href={user.html_url} target="blank">
        visit Github
      </a>
      <a href={user.blog} target="blank">
        Blog
      </a>
      <p>Bio: {user.bio} </p>
      <p>Company: {user.company} </p>
      <p>location:{user.location} </p>
      <p>Public Repos: {user.public_repos} </p>
    </div>
   
    </div>
    
    </>
  )
}
