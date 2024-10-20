import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./types";

const Button = ({ children, className, ...props }: ButtonProps) => {
  const containerClassName = twMerge(
    "bg-primaryGreen transition-all duration-300 text-white hover:bg-secondaryGreen rounded-lg p-[20px] px-4 font-bold text-sm font-Inter flex gap-[10px] items-center justify-center",
    className,
    props.disabled ? "opacity-50 cursor-not-allowed bg-gray-400" : ""
  );
  return (
    <button className={containerClassName} disabled={props.disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
