import React from "react";

export const Labels = ({ text, htmlFor, as } ) => {
  return (
    <>
     <label as={as} htmlFor={htmlFor}>
      {text}
    </label>
    </>
   
  );
};
export default Labels