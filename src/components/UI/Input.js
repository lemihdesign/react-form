import React from "react";
import useInput from "../../hooks/use-input.js";
import classes from "./Input.js";

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.type}>{props.label}</label>
      <input
        type={props.type}
        id={props.type}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
