import React from "react";
import { Outlet } from "react-router-dom";
const HomeView = () => {
  return (
    <>
      {}
      <div>
        <h1>Tüm Haberler Listelenecek</h1>
      </div>
      <Outlet />
    </>
  );
};

export default HomeView;
