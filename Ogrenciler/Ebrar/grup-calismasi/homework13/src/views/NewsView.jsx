import React from "react";
import { Outlet } from "react-router-dom";

function NewsView() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default NewsView;
