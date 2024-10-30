import { ChangeEvent } from "react";

export interface InputFieldProps {
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string
    placeholder?: string
    name: string
  }