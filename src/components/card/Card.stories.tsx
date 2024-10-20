import { Meta, StoryFn } from "@storybook/react";
import Card from "./Card.component";
import { CardProps } from "./types";
import logo from "@/assets/svgs/grosvenor_logo.svg";
import { colors } from '@/constants/colors';


export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    logoImage: { control: "text" },
    title: { control: "text" },
    rating: { control: "number" },
    winAmount: { control: "number" },
    betAmount: { control: "number" },
    currency: { control: "text" },
    logoBgColor: { control: "color" },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  logoImage: logo,
  title: "Grosvenor Casinos",
  rating: 5,
  winAmount: 500,
  betAmount: 100,
  currency: "£",
  logoBgColor: colors.richBlack,
};