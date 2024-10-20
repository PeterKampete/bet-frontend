import { Meta, StoryFn } from "@storybook/react";
import Rating from "./Rating.component";

export default {
  title: "Components/Rating",
  component: Rating,
  argTypes: {
    rating: { control: { type: "number", min: 1, max: 5 } },
  },
} as Meta<typeof Rating>;

type RatingProps = {
  rating: number;
};

const Template: StoryFn<RatingProps> = (args) => <Rating {...args} />;

export const FiveStars = Template.bind({});
FiveStars.args = {
  rating: 5,
};
