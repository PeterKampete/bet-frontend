import Card from "@/components/card/Card.component";
import cardData from "@/constants/cardData";

const Landing = () => {
  return (
    <main className="p-6 lg:p-[6.8125rem]">
      <h3 className="font-bold font-Montserrat text-primaryGray mb-4">
        Best Casinos {new Date().getFullYear()}
      </h3>
      <div className="flex flex-col gap-5">
        {cardData.map((item) => (
          <Card
            key={item.id}
            logoImage={item.logoImage}
            title={item.title}
            rating={item.rating}
            winAmount={item.winAmount}
            betAmount={item.betAmount}
            currency={item.currency}
            logoBgColor={item.logoBgColor}
          />
        ))}
      </div>
    </main>
  );
};

export default Landing;
