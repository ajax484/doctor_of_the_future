"use client";

import { MouseEvent } from "react";
import ButtonStyles, { ButtonStylesVariants } from "./button.variants";
import Image from "next/image";

type ButtonProps = {
  label: string;
  icon?: string;
  intent?: ButtonStylesVariants["intent"];
  size?: ButtonStylesVariants["size"];
  padding?: ButtonStylesVariants["padding"];
  rounded?: ButtonStylesVariants["rounded"];
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  form?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  intent,
  rounded,
  size,
  padding,
  onClick,
  disabled,
  loading,
  type = "button",
  form,
}) => {
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (type === "submit") return;
    if (disabled || loading || !onClick) {
      e.preventDefault();
      return;
    }
    onClick();
  };

  return (
    <button
      className={ButtonStyles({ intent, size, padding, rounded })}
      onClick={onClickHandler}
      type={type}
      disabled={disabled}
      form={form}
    >
      <div className="w-fit ">
        {!loading ? (
          <>{!!icon && <Image src={icon} width={10} alt="icon" />}</>
        ) : (
          <div>loading...</div>
        )}
      </div>
      <span className="p-0">{loading ? "Please Wait" : label}</span>
    </button>
  );
};

export default Button;
