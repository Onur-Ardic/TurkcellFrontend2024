import React from "react";

const DiscoverCard = ({ topHeading, centerHeading, bgImage }) => {
  return (
    <>
      <div
        className="card border-2 rounded-lg flex flex-col "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="topHeading text-start p-3">
          <span className="rounded-md p-1 text-lime-600 bg-zinc-300">
            {topHeading}
          </span>
        </div>
        <div className="centerHeading flex items-center justify-center flex-1">
          <h1 className="text-white text-2xl font-semibold tracking-widest">
            {centerHeading}
          </h1>
        </div>
      </div>
    </>
  );
};

export default DiscoverCard;
