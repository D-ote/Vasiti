import React from "react";
import { Phone } from "../../assets";
import { Button } from "../Button/Button";
import "./TopFooter.css";

export const TopFooter = () => {
  return (
    <div className="footer-top-div d-flex justify-content-between align-items-center mb-5">
      <div className="footer-img">
        <img src={Phone} alt="footer phone" />
      </div>
      <div className="footer-text">
        <h1>
          Be a member <br /> of our community 🎉
        </h1>
        <p>
          We’d make sure you’re always first to know what’s happening on
          Vasiti—thus, the world.
        </p>
        <form className="footer-form">
          <input
            type="email"
            className="form-control footer-form-input"
            placeholder="enter your email address"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <Button label="SUBSCRIBE" className="footer-btn" />
        </form>
      </div>
    </div>
  );
};
