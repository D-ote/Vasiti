import React from "react";
import { Yay } from "../../assets";
import { Button } from "../Button/Button";
import "./Thankyou.css";

export const Thankyou = ({ onClick }) => {
  return (
    <div className="thankyou" id="thanks">
      <div>
        <img src={Yay} alt="thank you modal" />
      </div>
      <div className="thankyou-body mt-4">
        <h1>
          Thank you for <br /> sharing your story!
        </h1>
        <div className="thanks-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <Button label="Close" className="thanks-btn" onClick={onClick} />
    </div>
  );
};
