import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 16px;
  text-align: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

const Avatar = styled.img`
  width: 300px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const Name = styled.p`
  font-size: 1.25em;
  font-weight: bold;
`;

const Username = styled.p`
  font-size: 1em;
  color: #6c757d;
`;

const Bio = styled.p`
  font-size: 1em;
  margin: 8px 0;
`;

const ProfileLink = styled.a`
  display: inline-block;
  width: 100%;
  padding: 8px 16px;
  margin-top: 8px;
  background-color: #6c757d;
  color: white;
  text-decoration: none;
  border-radius: 4px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 16px 0;
`;

const UserInfo = styled.p`
  font-size: 1em;
  color: white;
`;

const UserCard = ({ showUser }) => {
  return (
    <CardContainer>
      {showUser.map((user, index) => (
        <div key={index}>
          <Avatar src={user.avatar_url} alt={`${user.login} avatar`} />
          <Name>{user.name}</Name>
          <Username>{user.login}</Username>
          <Bio>{user.bio}</Bio>
          <ProfileLink href={user.html_url} target="_blank">
            Profile Git
          </ProfileLink>
          <Stats>
            <p>{user.followers} Takipçi</p>
            <p>{user.following} Takip Edilen</p>
          </Stats>
          <UserInfo>{user.location}</UserInfo>
          <UserInfo>{user.blog}</UserInfo>
          <UserInfo>{user.email ? user.email : "Email bulunamadı"}</UserInfo>
        </div>
      ))}
    </CardContainer>
  );
};

export default UserCard;
