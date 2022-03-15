import React from "react";
import "./Modal.css";

const Modal = ({ content, size, id, children }) => {
  return (
    <>
      <div
        data-toggle="modal"
        className="h-100"
        data-target={`#${id || "exampleModal"}`}
      >
        {children}
      </div>

      <div
        className="modal fade"
        id={id || "exampleModal"}
        tabIndex="-1"
        aria-labelledby={`${id || "exampleModal"} Label`}
        aria-hidden="true"
      >
        <div
          className={`modal-dialog modal-dialog-centered ${
            size === "large" ? "modal-lg" : size === "larger" ? "modal-xl" : ""
          }`}
        >
          <div className="modal-content">{content}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
