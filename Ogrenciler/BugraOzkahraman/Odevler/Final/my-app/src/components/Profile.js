import React from "react";
import { useAuth } from "../components/Context/AuthContext";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="container mt-5">
      <h2>Profile</h2>
      {currentUser ? (
        <p>Welcome, {currentUser.email}</p>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
