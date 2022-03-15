import React from "react";
import { Logo } from "../../assets";
import { Button } from "../Button/Button";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header d-flex align-items-center justify-content-between">
      <img src={Logo} alt="vasiti-logo" />

      <ul className="d-flex align-items-center">
        <li>ABOUT US</li>
        <li>STORIES</li>
        <li>CONTACT</li>
        <li>LOG IN</li>
        <li>
          <Button label="SIGN UP" />
        </li>
      </ul>
    </div>
  );
};
