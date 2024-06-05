import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import RepoCard from "./RepoCard";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserList = ({ showUser, repoData }) => {
  return (
    <div className="container pt-3">
      <Row>
        <UserCard showUser={showUser} />
        <RepoCard repoData={repoData} />
      </Row>
    </div>
  );
};

export default UserList;
