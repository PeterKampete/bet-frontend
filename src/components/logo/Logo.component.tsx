import logo from "@/assets/svgs/grosvenor_logo.svg";
import { twMerge } from "tailwind-merge";
import { LogoProps } from "./types";

const isTailwindBgClass = (color: string) => color?.startsWith("bg-");

const Logo = ({ logoImage = logo, logoBgColor, className }: LogoProps) => {
  const backgroundColorStyle = !isTailwindBgClass(logoBgColor)
    ? { backgroundColor: logoBgColor }
    : undefined;

  return (
    <div
      className={twMerge(
        "justify-center items-center flex w-full",
        isTailwindBgClass(logoBgColor) ? logoBgColor : "",
        className
      )}
      style={backgroundColorStyle}
    >
      <img src={logoImage} alt="logo_img" />
    </div>
  );
};

export default Logo;
