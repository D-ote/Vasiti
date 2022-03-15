import React from "react";
import "./Button.css";

export const Button = ({
  label = "",
  type = "",
  className = "",
  icon,
  ...rest
}) => {
  return (
    <button className={`mm-btn ${className}`} type={type} {...rest}>
      <>
        {icon} {label}
      </>
    </button>
  );
};
