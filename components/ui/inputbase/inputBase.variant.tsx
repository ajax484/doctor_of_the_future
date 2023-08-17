import { cva } from "class-variance-authority";

export type InputBaseStylesVariants = {
  intent?: "primary" | "secondary" | "error";
  width?: "full" | "half" | "fit";
  focus?: true;
  rounded?: "large" | "medium" | "small" | "none";
};

const InputBaseStyles = cva(
  "p-1.5 flex items-center gap-4 rounded-lg border-[1px] transition-colors duration-150",

  {
    /* variants */
    variants: {
      intent: {
        primary: "bg-white border-gray-100",
        secondary: "bg-white border-black",
        error: "bg-red-50 border-red-500",
      },

      width: {
        full: "w-full",
        half: "w-1/2",
        fit: "w-fit",
      },

      focus: {
        true: "!bg-gray-100 !border-gray-300",
      },

      /* button roundness*/
      rounded: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
      },
    },

    /* default variants */
    defaultVariants: {
      intent: "primary",
      width: "full",
      rounded: "medium"
    },
  }
);

export default InputBaseStyles;
