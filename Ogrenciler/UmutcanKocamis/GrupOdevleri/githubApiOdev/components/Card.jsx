import React from "react";
import { DivColumn, ProfileImg, ReposDiv, A, H2 } from "../src/styled";

const Card = ({ userInfo, userRepos }) => {
  return (
    <>
      <DivColumn>
        <ProfileImg position="absolute" top="20%" src={userInfo?.avatar_url} />
        <H2>{userInfo?.name} </H2>
        <div>{userInfo?.bio}</div>
        <div>
          {userInfo?.company && <i className="bi bi-building"></i>}{" "}
          {userInfo?.company}
        </div>
        <div>
          <i className="bi bi-people-fill"></i> {userInfo?.followers} followers{" "}
          {userInfo?.following} following
        </div>
        <div>
          {userInfo?.location && <i className="bi bi-geo-alt"></i>}{" "}
          {userInfo?.location}
        </div>
        <div>Public Repositories: {userInfo?.public_repos}</div>
        <h2>Repositories</h2>
        <ReposDiv>
          {userRepos?.map((data, index) => (
            <div key={index}>
              <A href={data.html_url} target="_blank">
                {data.name}
              </A>
            </div>
          ))}
        </ReposDiv>
      </DivColumn>
    </>
  );
};

export default Card;
