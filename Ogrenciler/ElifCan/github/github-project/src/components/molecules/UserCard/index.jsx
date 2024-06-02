import React from "react";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <>
      <img src={user.avatar_url} alt="" />
      <p>{user.name}</p>
      <p>{user.followers}</p>
      <p>{user.following}</p>
      <a href={user.html_url} target="blank">
        visit Github
      </a>
      <p>{user.bio} </p>
      <p>location:{user.location} </p>
      <p>{user.public_repos} </p>
    </>
  );
};

export default UserCard;
