import React from "react";

const UserProfile = ({ userData }) => {
  if (!userData) {
    return null;
  }

  return (
    <div className="card">
      <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <p>Location: {userData.location}</p>
      <p>
        Followers: {userData.followers} - Following: {userData.following}
      </p>
      <a href={userData.html_url} target="_blank">
        View Profile on GitHub
      </a>
    </div>
  );
};

export default UserProfile;
