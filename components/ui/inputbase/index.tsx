"use client"
import React, { useState, forwardRef, Ref, InputHTMLAttributes } from "react";
import InputBaseStyles, { InputBaseStylesVariants } from "./inputBase.variant";

interface InputProps {
  icon?: React.ReactNode;
  width?: InputBaseStylesVariants["width"];
  intent?: InputBaseStylesVariants["intent"];
  focus?: InputBaseStylesVariants["focus"];
  rounded?: InputBaseStylesVariants["rounded"];
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ intent, icon, width, rounded, placeholder, ...props }, ref) => {
    const [focus, setFocus] = useState(false);

    return (
      <div className={InputBaseStyles({ intent, width, focus, rounded })}>
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="text-lg m-0 p-0.5 w-full outline-none bg-transparent"
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
        {icon && <div className="mr-1 h-6 w-6 text-slate-500">{icon}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
