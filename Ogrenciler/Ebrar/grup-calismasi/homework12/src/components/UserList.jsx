import React from "react";
import UserCard from "./UserCard";
import RepoCard from "./RepoCard";

const UserList = ({ showUser,repoData }) => {
  return (
    <div className="container">
      <div className='row justify-content-between'>
      <UserCard showUser={showUser} />
      <RepoCard repoData={repoData}/>
    </div>
    </div>
  );
};

export default UserList;
