import React from "react";
import "./Story.css";

export const HiddenFile = ({ refElement, onChange }) => {
  return (
    <input
      type="file"
      className="hidden-file"
      ref={refElement}
      onChange={onChange}
      accept=".jpg,.png,.jpeg"
    />
  );
};
