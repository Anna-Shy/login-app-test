import React from "react";

import "./input.css";

export const Input = ({ type, value, setValue, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="input"
      placeholder={placeholder}
      required
    />
  );
};
