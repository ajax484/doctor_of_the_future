import { cva } from "class-variance-authority";

export type ButtonStylesVariants = {
  intent?: "primary" | "secondary" | "tertiary" | "transparent" | "default";
  size?: "full" | "half" | "fit";
  padding?: "tight" | "normal" | "wide";
  rounded?: "large" | "medium" | "small" | "none";
};

const ButtonStyles = cva(
  /* button base style */
  "h-fit border-2 transition-colors duration-150 font-secondary text-sm md:text-base flex justify-center items-center disabled:hover:bg-gray-300 disabled:hover:text-gray-500 disabled:cursor-not-allowed capitalize flex font-medium transition-all duration-150 py-2",
  {
    variants: {
      /* button colors */
      intent: {
        primary:
          "bg-black border-black text-white hover:bg-white hover:text-black",
        secondary:
          "bg-secondary border-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary",
        tertiary:
          "bg-white border-white text-black",
          transparent:
          "bg-transparent text-white hover:bg-black hover:text-white border-white hover:border-black",
        default:
          "bg-secondary text-white hover:bg-white hover:text-secondary border-secondary",
      },

      /* button sizes */
      size: {
        full: "w-full",
        half: "w-1/2",
        fit: "w-fit",
      },

      /* button padding */
      padding: {
        tight: "px-1",
        normal: "px-2",
        wide: "px-4",
      },

      /* button roundness*/ 
      rounded: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg"
      }
    },

    // defaults
    defaultVariants: {
      intent: "default",
      size: "full",
      padding: "normal",
      rounded: "medium"
    },
  }
);

export default ButtonStyles;
