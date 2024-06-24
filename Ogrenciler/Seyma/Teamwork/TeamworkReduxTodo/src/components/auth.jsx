import React from "react";
import { auth } from "../config/firebase";
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const Auth = ({ children }) => {
  const [user] = useAuthState(auth);
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Auth;
