import React from "react";
import { Outlet } from "react-router-dom";

const NewView = () => {
  return (
    <>
      <h2>Haberler</h2>
      <Outlet />
    </>
  );
};

export default NewView;
