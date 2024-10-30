import React from "react";
import { InputFieldProps } from "./Input.types";

const InputField: React.FC<InputFieldProps> = ({ value, onChange, type="text", placeholder, name }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder || "Enter input"}
    />
  );
};

export default InputField;
