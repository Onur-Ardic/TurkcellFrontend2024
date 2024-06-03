import React from "react";
import { ImgCard, GithubCard, GithubCardA } from "../css/UserCardCss";
import { FaLocationDot } from "react-icons/fa6";

function UserCard({ userData, userRepo }) {
  return (
    <>
      {userData.name && (
        <GithubCard className="card my-5 p-3">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12 text-center">
              <div className="card personal-data p-3 bg-dark text-light">
                <ImgCard src={userData.avatar_url} className="rounded-1" />
                <div className="card-body text-center">
                  <h2 className="card-title">{userData.name}</h2>
                  <a
                    href={userData.html_url}
                    target="_blank"
                    className="btn btn-danger my-2 animate__animated animate__zoomIn animate__infinite"
                  >
                    Github Account
                  </a>
                  <div className="content">
                    <p>{userData.bio}</p>
                    <div className="network d-flex gap-2 justify-content-center text-dark">
                      <p className="bg-light p-2 rounded-1">
                        Followers : {userData.followers}
                      </p>
                      <p className="bg-light p-2 rounded-1">
                        Following : {userData.following}
                      </p>
                    </div>
                    <p>
                      <FaLocationDot /> {userData.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-12 text-center text-md-start">
              <div className="card-body">
                <h3 className="text-center bg-light p-3 rounded-2 w-50 mx-auto">
                  REPOSITORIES
                </h3>
                <div className="row row-cols-lg-4 row-cols-sm-3 row-cols-1 gap-2 justify-content-center">
                  {userRepo &&
                    userRepo.map((repo, index) => (
                      <GithubCardA
                        key={index}
                        href={repo.html_url}
                        target="_blank"
                        className={`btn btn-outline-light col`}
                      >
                        {repo.name}
                      </GithubCardA>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </GithubCard>
      )}
    </>
  );
}

export default UserCard;
