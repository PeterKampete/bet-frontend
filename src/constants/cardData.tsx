import logo from "@/assets/svgs/grosvenor_logo.svg";
import happy_logo from "@/assets/svgs/happy_spins_logo.svg";
import hajper_logo from "@/assets/svgs/hajper_logo.svg";
import { CardProps } from "@/components/card/types";
import { colors } from "./colors";

const cardData: CardProps[] = [
  {
    id: "0",
    logoImage: logo,
    title: "Grosvenor Casinos",
    rating: 5,
    betAmount: 100,
    winAmount: 400,
    currency: "£",
    logoBgColor: colors.richBlack,
  },
  {
    id: "1",
    logoImage: happy_logo,
    title: "Happy Spins",
    rating: 5,
    betAmount: 150,
    winAmount: 600,
    currency: "$",
    logoBgColor: colors.darkPurple,
  },
  {
    id: "2",
    logoImage: hajper_logo,
    title: "Hajper",
    rating: 5,
    betAmount: 200,
    winAmount: 800,
    currency: "£",
    logoBgColor: colors.indigoDye,
  },
];

export default cardData;
