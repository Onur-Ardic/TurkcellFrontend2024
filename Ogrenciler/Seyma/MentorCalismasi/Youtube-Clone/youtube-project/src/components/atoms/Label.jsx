import React from "react";
import {LabelInput} from "./Styled";

export const Label = ({htmlFor, text} ) => {
  return (
    <>
     <LabelInput htmlFor ={htmlFor}>{text}</LabelInput>
   
    </>
   
  );
};
export default Label