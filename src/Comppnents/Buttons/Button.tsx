import React from "react";
import { ButtonProps } from "./Buttons.types";

const Button: React.FC<ButtonProps> = ({ onClick,text }) => {
  return <button onClick={onClick}>{text || ""}</button>;
};


export default Button;
