import React from "react";

const index = ({ text, className }) => {
  function handleClick() {
    window.location.href = "mailto:elifcan0777@mail.com";
  }
  return (
    <>
      <button className={className} onClick={handleClick}>
        {text}
      </button>
    </>
  );
};

export default index;
