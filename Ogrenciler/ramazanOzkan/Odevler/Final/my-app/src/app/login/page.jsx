import Login from "../../components/Login";
import Register from "../../components/Register";
import ForgotPasswordPage from "@/components/Forgot-password";

import React from 'react';

const Home = () => {
  return (
    <div>
      <Login></Login>
      <hr/>
      <Register></Register>
      <hr/>
      <ForgotPasswordPage></ForgotPasswordPage>
    </div>
  );
};

export default Home;