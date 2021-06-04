import React from "react";
import "./Input.css";

function Input({ value, type = "text", ...props }) {
  return <input value={value} type={type}  {...props}></input>;
}

export default Input;