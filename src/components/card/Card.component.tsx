import Button from "@/components/button/Button.component";
import Logo from "../logo/Logo.component";
import Rating from "../rating/Rating.component";
import { CardProps } from "./types";

//The reason I did not make the logo component to conform to just three logos is because in a live project we will have many companies and different logos, so they will have different background colors and logos, hence the logoImage and logoBg props.
// On the other hand if the components were considered to be three, I would have had static types for the title, the logoImage and logoBg

const Card = (props: CardProps) => {
  const {
    logoImage,
    title,
    rating,
    winAmount,
    betAmount,
    currency,
    logoBgColor,
  } = props;
  return (
    <div className="flex shadow-custom flex-col p-4 rounded-[4px] lg:flex-row lg:justify-between lg:items-center lg:pr-[16px] xl:pr-[70px]">
      <div className="xs:w-full flex flex-col md:flex-col space-x-0 md:space-x-0 sm:flex-row sm:space-x-7 lg:flex-row flex-[63%] lg:space-x-0">
        <Logo
          logoImage={logoImage}
          logoBgColor={logoBgColor}
          className="h-full sm:w-[50%] md:w-full lg:w-[60%] xs:mb-[20px] sm:mb-0"
        />
        <div className="sm:mt-0 flex flex-col items-center text-center md:items-center md:text-center sm:items-start sm:text-start lg:flex-row w-full lg:justify-evenly lg:items-start">
          <div className="flex flex-col items-center sm:items-start md:items-center lg:items-start lg:mt-[20px]">
            <p className="xs:text-[20px] underline text-center md:text-center sm:text-left font-Montserrat font-normal">
              {title}
            </p>
            <div className="mt-[20px]">
              <Rating rating={Number(rating.toFixed(0))} />
            </div>
          </div>
          <div className="xs:mt-[20px]">
            <p className="xs:text-[20px] gap-1 font-semibold text-sm text-center md:text-center sm:text-left">
              Bonus
            </p>
            <div className="gap-1 flex flex-col md:flex-row md:gap-2 sm:flex-row sm:gap-1 lg:flex-col lg:gap-0 font-normal lg:mt-2">
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
      <Button className="xs:mt-5 md:mt-5 lg:mt-0 lg:w-auto w-full flex-[10%] xl:mt-0 self-center lg:mr-7 xs:mr">
        Bet Now
      </Button>
    </div>
  );
};

export default Card;
