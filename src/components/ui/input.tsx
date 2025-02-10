import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  ...props
}, ref) => {
  return;
});
Input.displayName = "Input";
export { Input };