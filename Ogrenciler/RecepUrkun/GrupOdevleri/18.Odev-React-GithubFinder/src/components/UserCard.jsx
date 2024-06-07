import React from "react";
import { Button } from "./Styled";

const UserCard = ({ userData, dateFormatter, moreInfo, setMoreInfo }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <img
        src={userData.avatar_url}
        alt={userData.name}
        className="img-fluid rounded-circle p-4"
      />

      <div className="d-flex flex-column px-4">
        <h4 className="fw-bold">{userData.name}</h4>
        <h6 className="fw-medium fst-italic">{userData.login}</h6>
        <h6 className="mb-2">{userData.bio}</h6>
        <hr />
        <div className="d-flex align-items-baseline flex-column">
          <h6>
            <i className="fa-solid fa-users me-2"></i>
            {userData.followers}
            <b> followers </b>
          </h6>
          <h6>
            <i className="fa-solid fa-user-group me-1"></i> {userData.following}
            <b> following </b>
          </h6>
          <h6>
            {userData.location ? (
              <b>
                <>
                  <i className="fa-solid fa-location-dot me-3"></i>
                  {userData.location}
                </>
              </b>
            ) : (
              ""
            )}
          </h6>
        </div>
        <hr />
      </div>

      <div className="d-flex justify-content-start flex-column px-5">
        <Button className="my-3" onClick={() => setMoreInfo(!moreInfo)}>
          More Info
        </Button>
        {moreInfo && (
          <div className="border-start border-end border-1 text-center">
            <h6>
              <small>
                Hesap Oluşturulma Tarihi:
                <i> {dateFormatter(userData.created_at)} </i>
              </small>
            </h6>
            <h6>
              <small>
                Son Güncellenme Tarihi:
                <i>{dateFormatter(userData.updated_at)}</i>
              </small>
            </h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
