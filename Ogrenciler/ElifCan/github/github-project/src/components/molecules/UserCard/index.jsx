import React from "react";
import './index.css'

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <> 
    <div className="userInfo">
    <div className="profile">
    <img className="profileImg" src={user.avatar_url} alt="" />
    </div>
    <div className="contentRight">
    <h2>{user.name}</h2>
      <i className="bi bi-people-fill"></i> <p><span className="fw-bold">Followers: </span> {user.followers}</p>
      <p> <span className="fw-bold">Following: </span> {user.following}</p>
      <p> <a href={user.html_url} target="blank" className="text-white">
        visit Github
      </a></p>
      <p ><a href={user.blog} className="text-white" target="blank">
        Blog
      </a></p>
      
      <p> <span className="fw-bold">Bio: </span> {user.bio} </p>
      <p><span className="fw-bold">Company: </span> {user.company} </p>
      <p> <span className="fw-bold">location: </span>{user.location} </p>
      <p> <span className="fw-bold">Public Repos: </span> {user.public_repos} </p>
    </div>
   
    </div>
    
    </>
  );
};

export default UserCard;
