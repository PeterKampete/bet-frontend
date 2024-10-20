import Button from "@/components/button/Button.component";
import Logo from "../logo/Logo.component";
import Rating from "../rating/Rating.component";
import { CardProps } from "./types";

//The reason I did not make the logo component to conform to just three logos is because in a live project we will have many companies and different logos, so they will have different background colors and logos, hence the logoImage and logoBg props.
// On the other hand if the components were considered to be three, I would have had static types for the title, the logoImage and logoBg

const Card = (props: CardProps) => {
  const { logoImage, title, rating, winAmount, betAmount, currency, logoBgColor } = props;
  return (
    <div className="flex shadow-custom flex-col p-4 rounded-sm lg:flex-row lg:justify-between lg:items-center">
      <div className="flex flex-col md:flex-col space-x-0 md:space-x-0 sm:flex-row sm:space-x-7 lg:flex-row flex-[70%]">
        <Logo
          logoImage={logoImage}
          logoBgColor={logoBgColor}
          className="xs:h-[133px] sm:w-[50%] md:w-full lg:w-[70%]"
        />
        <div className="flex flex-col items-center text-center md:items-center md:text-center sm:items-start sm:text-start lg:flex-row w-full lg:justify-evenly">
          <div className="flex flex-col items-center sm:items-start md:items-center">
            <p className="xs:text-[20px] underline text-center md:text-center sm:text-left mt-3 font-Montserrat font-normal">
              {title}
            </p>
            <div className="my-3">
              <Rating rating={Number(rating.toFixed(0))} />
            </div>
          </div>
          <div>
            <p className="xs:text-[20px] xs:mb-2 font-semibold text-sm text-center md:text-center sm:text-left">
              Bonus
            </p>
            <div className="gap-1 flex flex-col md:flex-row md:gap-1 sm:flex-row sm:gap-1 lg:flex-col lg:gap-0 font-normal">
              <p className="text-lg font-Montserrat xs:text-[28px]">
                Bet {currency}
                {betAmount}
              </p>
              <p className="text-lg font-Montserrat xs:text-[28px]">
                Get {currency}
                {winAmount}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Button className="mt-3 lg:w-auto w-full flex-[5%]">Bet Now</Button>
    </div>
  );
};

export default Card;
