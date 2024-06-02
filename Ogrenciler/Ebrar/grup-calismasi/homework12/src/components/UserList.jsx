import React from "react";

const UserList = ({ showUser }) => {
  return (
    <div>
      {showUser.map((user, index) => (
        <div key={index}>
          <p>Username: {user.login}</p>
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            style={{ width: "100px", borderRadius: "50%" }}
          />

          <p> {user.followers}</p>
          <p> {user.following}</p>
          <p> {user.bio}</p>
          <p>
            Profili İncele:{" "}
            <a href={user.html_url} target="_blank">
              {user.html_url}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
