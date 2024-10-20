import { LogoProps } from "../logo/types";

export interface CardProps extends LogoProps {
  rating: 1 | 2 | 3 | 4 | 5;
  betAmount: number;
  winAmount: number;
  title: string;
  currency: "£" | "$";
  id?: string;
}
