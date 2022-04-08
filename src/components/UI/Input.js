import React from "react";

const Input = (props) => {
  return (
    <>
      {/* <label htmlFor={props.type}>{props.label}</label> */}
      <input
        type={props.type}
        id={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </>
  );
};

export default Input;
